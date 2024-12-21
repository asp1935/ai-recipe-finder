/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import data from './ingredients.json';
import { getRecipe } from '../api/api';
import RecipeList from './RecipeList';
function SearchBar() {

  const [recipeQuery, setRecipeQuery] = useState('');
  const [inputIngredient, setInputIngredient] = useState('');
  const [recipeingredints, setRecipeIngredients] = useState(['rice', 'chicken']);
  const [dbIngredientList, setdbIngredientList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [recipeData,setRecipeData]=useState({})
  const ingredientData = data.ingredients;
  // const 

  useEffect(() => {
    const filterDBIngredients = ingredientData.filter(word => word.toLowerCase().includes(inputIngredient.toLowerCase())).slice(0, 5);
    const combineList = inputIngredient ? [inputIngredient, ...filterDBIngredients.filter((item) => item !== inputIngredient)] : filterDBIngredients;
    setFilteredList(combineList);
    setdbIngredientList(filterDBIngredients);
  }, [inputIngredient, ingredientData]);

  const capitalizeWords = (string) => {
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'recipe_name') {
      setRecipeQuery(value);
    }
    else if (name === 'ingredients') {
      setInputIngredient(value);
    }
  }



  const handleAddIngredients = (ingredent) => {
    if (!recipeingredints.includes(ingredent)) {
      setRecipeIngredients([...recipeingredints, ingredent])
      setInputIngredient('');
    }
    else {
      console.log('Already Exist!!!');

    }
  }

  const handleRemoveIngredient = (removedIngredent) => {
    setRecipeIngredients((preveIngredients) => preveIngredients.filter((ingredient) => ingredient !== removedIngredent));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(recipeQuery, recipeingredints);
    const responceRecipeData = await getRecipe(recipeQuery, recipeingredints);
    if(responceRecipeData.status){
      setRecipeData(responceRecipeData?.data.data)
    }
    

  }

  return (
    <>
    {/* bg-gradient-to-r from-[#F9D126] to-[#EAB70A]  bg-[url('/home2r.png')]*/}
      <div className="relative w-full min-h-screen pt-20  bg-cover " >
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-10'>
          <input
            type="text"
            name="recipe_name"
            id="recipe"
            placeholder='Recipe in you mind...'
            onChange={handleChange}
            value={recipeQuery}
            className='w-[80%] lg:w-[40vw] bg-transparent border-b border-black outline-none px-3 py-2 md:px-5  md:py-4  text-xl placeholder:text-xl placeholder:text-white'
          />
          <div className='relative w-[80%] lg:w-[40vw]   flex flex-col items-center md:p-4'>
            <>
              {recipeingredints && recipeingredints?.length > 0 && (
                <div className='relative flex flex-wrap w-full  gap-4 p-2'>
                  <h1 className='block'>Available Ingredients :</h1>
                  {recipeingredints.map((ingredent, index) => (
                    <div key={index} className='bg-[#FF9800] shadow-md rounded-md w-fit h-fit  px-3 py-0.5 flex  items-center gap-2 '>
                      <h1 className='capitalize'>{ingredent}</h1>
                      <i className="fa-solid fa-xmark cursor-pointer" onClick={() => handleRemoveIngredient(ingredent)}></i>
                    </div>
                  ))}

                </div>
              )}
              <input
                type='text'
                name='ingredients'
                id='ingredients'
                placeholder='Search Ingredients...'
                onChange={handleChange}
                value={inputIngredient}
                className='w-full bg-transparent outline-none border-b border-black border-opacity-40 focus:border-opacity-100   mt-5 px-1  text-xl placeholder:text-xl placeholder:text-white'
              />
              <div>
                {filteredList.length > 0 && (
                  <div className='flex flex-wrap w-full gap-4 p-2 mt-3'>
                    {filteredList.map((ingredent, index) => (

                      <div key={index} className='bg-yellow-300 shadow-md rounded-md w-fit h-fit  px-3 py-0.5 flex  items-center gap-2 '>
                        <h1 className='capitalize'>{ingredent}</h1>
                        <i className="fa-solid fa-plus cursor-pointer" onClick={() => handleAddIngredients(ingredent)}></i>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </>
          </div>

          <button
            type="submit"
            className="outline-none border border-black text-xl  px-10 py-3 w-[80%] md:w-[50%] lg:w-[30%] rounded-full bg-search-bt-g  bg-cover bg-center "
          >
            Search
          </button>
        </form>
        <div className='absolute -z-10 w-[80vw] sm:w-[60vw] md:w-[40vw]  -left-10 bottom-0 md:bottom-10 '>
          <img src={'/ingredient2.png'} alt="" className='w-full h-full object-cover '/>
        </div>
      </div>
      {recipeData.length > 0 && (<RecipeList recipeData={recipeData} />)}
    </>
  )
}

export default SearchBar
