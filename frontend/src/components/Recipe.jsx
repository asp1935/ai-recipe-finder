import React from 'react'
import { recipeRemove } from '../utility/recipeRemove';

function Recipe({ recipe, setViewRecipe }) {
    const cleanedRecipeInst = (recipe.TranslatedInstructions).split('.').map(step => step.trim()).filter(step => step !== '');

    return (
        <div className='fixed w-full h-screen top-0 left-0 bg-yellow-500 bg-opacity-70 backdrop-blur-md  flex justify-center items-center '>

            <div className='relative w-[90%] md:w-[70%] h-[80%] overflow-hidden rounded-xl'>
                <div className='w-full h-full bg-white overflow-y-auto rounded-xl shadow-2xl clip'>
                    <div className='flex justify-between p-5'>
                        <div>
                        </div>
                        <div>
                            <h2 onClick={() => setViewRecipe(false)} className='cursor-pointer'><i className="fa-solid fa-xmark"></i></h2>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center gap-2'>
                        <div className='w-[30vw] md:w-[10vw] h-[30vw] md:h-[10vw] rounded-full overflow-hidden border-2 border-yellow-400 '>
                            <img src={recipe['image-url']} alt="" className='w-full h-full object-center rounded-ful' />
                        </div>
                        <div className='mt-5 w-[90%] md:w-[80%] flex flex-col items-center'>
                            <h1 className='text-xl md:text-2xl capitalize font-semibold underline decoration-yellow-400 underline-offset-4 '>{recipeRemove(recipe.TranslatedRecipeName)}</h1>
                            <h5 className='text-sm md:text-base text-center uppercase opacity-50'>{recipeRemove(recipe.Cuisine)}</h5>
                        </div>
                        <div className="w-[90%] md:w-[80%] flex flex-col items-center">
                            <h4 className='w-full text-base  md:text-lg font-semibold underline decoration-yellow-400 text-left'>Required Ingredients: </h4>
                            <div className='w-[90%] md:w-[80%] p-2 grid grid-cols-1 md:grid-cols-2 '>
                                {(recipe.TranslatedIngredients).split(',').map((ingredient) => (
                                    <div className='capitalize px-2 py-1 font-[cursive] text-gray-700'>- {ingredient}</div>
                                ))}
                            </div>
                        </div>
                        <div className="w-[90%] md:w-[80%] flex flex-col items-center">
                            <div className='w-full flex justify-between z-10'>
                                <h4 className='text-base md:text-lg font-semibold underline decoration-yellow-400 text-left'>Instructions: </h4>
                                <h5 className='underline decoration-yellow-400 decoration-2 '>{recipe.TotalTimeInMins}min</h5>
                            </div>
                            <div className='w-[80%] mt-5' >
                                <ol className='list-decimal'>
                                    {(cleanedRecipeInst).map((step) => (
                                        (step) && (
                                            <li className='mt-3 font-[cursive] text-base md:text-xl text-justify text-pretty md:tracking-wide text-gray-700'>{step}.</li>
                                        )
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className='my-5 p-5 '>
                            <button onClick={() => setViewRecipe(false)} className='bg-yellow-400 px-4 py-2 rounded-full'>Close & Cook <i className="fa-solid fa-utensils" /></button>
                        </div>

                        <div className='absolute z-0 -top-16 left-0 w-[20vw] md:w-[10vw] '>
                            <img src="/ingredient7.png" alt="" />
                        </div>
                        <div className='absolute z-0 top-1/4 right-0 w-[18vw] md:w-[10vw] '>
                            <img src="/ingredient8.png" alt="" />
                        </div>
                        <div className='absolute z-0 bottom-0 left-0 w-[20vw] md:w-[10vw] '>
                            <img src="/ingredient9.png" alt="" className='transform scale-x-[-1]' />
                        </div>
                    </div>


                </div>



            </div>
        </div>
    )
}

export default Recipe
