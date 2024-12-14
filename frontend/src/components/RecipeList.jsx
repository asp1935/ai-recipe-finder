import React from 'react'

function RecipeList({ recipeData }) {
  console.log(recipeData);

  return (
    <div className='w-full flex flex-col items-center gap-10 mt-10'>
      {recipeData && recipeData.length > 0 && (
        recipeData.map((recipe, index) => (

          <div key={index} className='flex w-[80%] min-h-[20vw] items-center justify-center gap-5 p-5 rounded-3xl shadow-lg shadow-stone-700 '>
            <div className='w-[30%] '>
              <img src={recipe["image-url"]} alt="" className='w-full object-fill object-center rounded-xl decoration-yellow-500  hover:underline hover:underline-offset-4' />
            </div>
            <div className='flex flex-col gap-y-3 w-[70%]'>
              <h1 className='capitalize text-2xl font-semibold'>{recipe.TranslatedRecipeName}</h1>
              <p><span className='font-medium underline decoration-yellow-400 decoration-2'>Dish From</span> :- {recipe.Cuisine}</p>
              <p><span className='font-medium underline decoration-yellow-400 decoration-2'>Making Time</span> :-{recipe.TotalTimeInMins}</p>
              <p> <span className='font-medium underline decoration-yellow-400 decoration-2'>Ingredients</span> :- {(recipe.TranslatedIngredients).split(',').slice(0, 5).join(', ')}</p>
              <p><span className='font-medium underline decoration-yellow-400 decoration-2'>Intructions</span> :-  {(recipe.TranslatedInstructions).substring(0, 25)}...</p>
            </div>
          </div>
        ))

      )}
    </div>
  )
}

export default RecipeList
