import React, { useEffect, useRef, useState } from 'react'
import Recipe from './Recipe';

function RecipeList({ recipeData }) {

  const [viewRecipe, setViewRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const listDivRef=useRef(null);

  useEffect(()=>{
    listDivRef.current.scrollIntoView({behavior:'smooth',block:'start'})
  },[recipeData])

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setViewRecipe(true);
  }

  return (
    <div ref={listDivRef} className='relative w-full flex flex-col items-center gap-10 mt-10'>
      {recipeData && recipeData.length > 0 && (
        recipeData.map((recipe, index) => (

          <div key={index} onClick={() => handleViewRecipe(recipe)} className=' relative flex flex-col lg:flex-row w-[90%] md:w-[80%] min-h-[15vw] md:h-[15vw] items-center justify-center gap-5 p-5 rounded-3xl cursor-pointer bg-[#ffffff] bg-opacity-15 backdrop-blur-sm shadow hover:shadow-lg hover:-translate-y-2 transition-transform duration-500'>
            <div className='w-[70%] md:w-[50%] lg:w-[25%] h-full'>
              <img src={recipe["image-url"]} alt="" className='w-full h-full object-fill object-center rounded-xl ' />
            </div>
            <div className='flex flex-col gap-y-3  md:w-[80%] lg:w-[80%]'>
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
      <div className='absolute w-[30vw] -z-10 top-0 right-0'>
        <img src='/dish1.png' alt="" className='w-full h-full' />

      </div>
      <div className='absolute w-[30vw] -z-10 top-1/4 left-0'>
        <img src='/ingredient1.png' alt="" className='w-full h-full ' />

      </div>
      <div className='absolute w-[30vw] -z-10 top-1/2 right-0'>
        <img src="/dish3.png" alt="" className='w-full h-full' />

      </div>
      <div className='absolute w-[30vw] -z-10 top-1/2 right-0'>
        <img src="/dish3.png" alt="" className='w-full h-full' />

      </div>
      <div className='absolute w-[25vw] -z-10 top-3/4 left-0'>
        <img src="/dish4.png" alt="" className='w-full h-full' />

      </div>
      <div className='absolute w-[30vw] -z-10 top-0 right-0'>

      </div>

    </div>
  )
}

export default RecipeList
