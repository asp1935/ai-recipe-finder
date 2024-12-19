import React, { useState } from 'react'
import Recipe from './Recipe';

function RecipeList({ recipeData }) {

  const [viewRecipe, setViewRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setViewRecipe(true);
  }
  
  return (
    <div className='relative w-full flex flex-col items-center gap-10 mt-10'>
      {recipeData && recipeData.length > 0 && (
        recipeData.map((recipe, index) => (

          <div key={index} onClick={() => handleViewRecipe(recipe)} className=' relative flex w-[80%] h-[15vw] items-center justify-center gap-5 p-5 rounded-3xl cursor-pointer bg-[#FF9800] bg-opacity-15 backdrop-blur-sm shadow hover:shadow-lg hover:-translate-y-2 transition-transform duration-500'>
            <div className='w-[25%] h-full'>
              <img src={recipe["image-url"]} alt="" className='w-full h-full object-fill object-center rounded-xl ' />
            </div>
            <div className='flex flex-col gap-y-3 w-[70%]'>
              <h1 className='capitalize text-2xl font-semibold decoration-yellow-500 underline-offset-4 hover:underline '>{recipe.TranslatedRecipeName}</h1>
              <p><span className='font-medium underline decoration-yellow-400 decoration-2'>Dish From</span> :- {recipe.Cuisine}</p>
              <p><span className='font-medium underline decoration-yellow-400 decoration-2'>Making Time</span> :-{recipe.TotalTimeInMins}</p>
              <p><span className='font-medium underline decoration-yellow-400 decoration-2'>Ingredients</span> :- {(recipe.TranslatedIngredients).split(',').slice(0, 5).join(', ')}</p>
              <p><span className='font-medium underline decoration-yellow-400 decoration-2'>Intructions</span> :-  {(recipe.TranslatedInstructions).substring(0, 25)}...</p>
            </div>
          </div>
        ))

      )}
      {viewRecipe && (
        <Recipe recipe={selectedRecipe} setViewRecipe={setViewRecipe} />
      )}
    </div>
  )
}

export default RecipeList
