from flask import Flask, jsonify, request
from dotenv import load_dotenv
import os
import pickle
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:8000", "methods": ["POST", "OPTIONS"]}})

class RecipeFinder:
    def __init__(self, recipe_data, ingredient_vectorizer, query_vectorizer, ingredient_vectors, query_vectors):
        self.recipe_data = recipe_data
        self.ingredient_vectorizer = ingredient_vectorizer
        self.query_vectorizer = query_vectorizer
        self.ingredient_vectors = ingredient_vectors
        self.query_vectors = query_vectors
    
    def find_recipes(self, user_ingredients=None, user_query=None, top_n=5):
        if user_ingredients:
            ingredient_vector = self.ingredient_vectorizer.transform([' '.join(user_ingredients)])
            ingredient_similarities = cosine_similarity(ingredient_vector, self.ingredient_vectors)
        else:
            ingredient_similarities = [[0] * len(self.recipe_data)]

        if user_query:
            query_vector = self.query_vectorizer.transform([user_query])
            query_similarities = cosine_similarity(query_vector, self.query_vectors)
        else:
            query_similarities = [[0] * len(self.recipe_data)]
            
        combine_similarities = (ingredient_similarities + query_similarities) / 2
        
        top_indices = combine_similarities.argsort()[0][-top_n:][::-1]
        top_indices = top_indices[:min(len(self.recipe_data), top_n)]
        
        return self.recipe_data.iloc[top_indices]

@app.route('/')
def index():
    data = {
        'status': 'success',
        'data': 'Working fine',
        'message': 'Server running'
    }
    return jsonify(data)

@app.route('/get-recipe', methods=['POST'])
def get_recipe():
    try:
        # Validate JSON payload
        if not request.is_json:
            return jsonify({'status': 'error', 'message': 'Invalid JSON input'}), 400
        
        data = request.get_json()
        if not data:
            return jsonify({'status': 'error', 'message': 'Empty JSON payload'}), 400

        ingredients = data.get('ingredients', [])
        query = data.get('query', '')
        # print(ingredients,query)
        
        if not ingredients and not query:
            return jsonify({'status': 'error', 'message': 'At least one of ingredients or query must be provided'}), 400

        if not isinstance(ingredients, list) or not all(isinstance(i, str) for i in ingredients):
            return jsonify({'status': 'error', 'message': 'Invalid ingredients format, must be a list of strings'}), 400

        if not isinstance(query, str):
            return jsonify({'status': 'error', 'message': 'Invalid query format, must be a string'}), 400

        # Load the RecipeFinder model securely
        try:
            with open('./recipe_finder_model.pkl', 'rb') as f:
                recipe_finder = pickle.load(f)
                print(recipe_finder)
        except FileNotFoundError:
            return jsonify({'status': 'error', 'message': 'Model file not found'}), 500
        except Exception as e:
            return jsonify({'status': 'error', 'message': f'Error loading model: {str(e)}'}), 500

        # Get recommendations
        recommended_recipes = recipe_finder.find_recipes(user_ingredients=ingredients, user_query=query, top_n=10)

        # Convert DataFrame to JSON if valid
        if isinstance(recommended_recipes, pd.DataFrame):
            recommended_recipes = recommended_recipes.to_dict(orient='records')

        return jsonify({'status': 'success', 'data': recommended_recipes}), 200

    except Exception as e:
        # Catch unexpected errors
        return jsonify({'status': 'error', 'message': f'An unexpected error occurred: {str(e)}'}), 500

if __name__ == '__main__':

    port = os.getenv('PY_PORT', 5000)
    app.run(host='127.0.0.1', port=port, debug=False)
