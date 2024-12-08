import pickle
from sklearn.metrics.pairwise import cosine_similarity

class RecipeFinder:
    def __init__(self, recipe_data, ingredient_vectorizer, query_vectorizer, ingredient_vectors, query_vectors):
        self.recipe_data = recipe_data  # The original recipe dataset
        self.ingredient_vectorizer = ingredient_vectorizer  # TF-IDF vectorizer for ingredients
        self.query_vectorizer = query_vectorizer  # TF-IDF vectorizer for recipe names
        self.ingredient_vectors = ingredient_vectors  # TF-IDF vectors for the ingredients
        self.query_vectors = query_vectors  # TF-IDF vectors for the recipe names

    def find_recipes(self, input_ingredients=None, input_query=None, top_n=5):
        # Initialize cosine similarity for ingredients (if input_ingredients is provided)
        if input_ingredients:
            ingredient_vector = self.ingredient_vectorizer.transform([" ".join(input_ingredients)])
            ingredient_similarities = cosine_similarity(ingredient_vector, self.ingredient_vectors)
        else:
            # If no ingredients are provided, set similarity to zero for all recipes
            ingredient_similarities = [[0] * len(self.recipe_data)] 

        # Initialize cosine similarity for recipe names (if input_query is provided)
        if input_query:
            query_vector = self.query_vectorizer.transform([input_query])
            query_similarities = cosine_similarity(query_vector, self.query_vectors)
        else:
            # If no name query, set similarity to zero for all recipes
            query_similarities = [[0] * len(self.recipe_data)] 

        # Combine the similarity scores (simple average of both attributes)
        combined_similarities = (ingredient_similarities + query_similarities) / 2

        # Get the top N indices based on the combined similarity
        top_indices = combined_similarities.argsort()[0][-top_n:][::-1]

        # Handle case where fewer recipes exist
        top_indices = top_indices[:min(len(self.recipe_data), top_n)]

        # Return top N recipes
        return self.recipe_data.iloc[top_indices]
    
    
    

with open('recipe_finder_model.pkl', 'rb') as f:
    recipe_finder = pickle.load(f)  

# Find recipes using the model
input_ingredients = input('Enter ingredients (space-separated) [optional]: ').split() if input('Do you want to enter ingredients? (yes/no): ').lower() == 'yes' else None
input_query = input('Enter recipe name query [optional]: ') if input('Do you want to enter a recipe name? (yes/no): ').lower() == 'yes' else None

# Find recommended recipes
recommended_recipes = recipe_finder.find_recipes(input_ingredients=input_ingredients, input_query=input_query, top_n=5)

# Print recommendations
print(recommended_recipes[['TranslatedRecipeName', 'TranslatedIngredients', 'URL']])

