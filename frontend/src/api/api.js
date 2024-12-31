import axios from "axios";

const api_uri = import.meta.env.VITE_API_URI;

export const getRecipe = async (userQuery, userIngredients) => {
    if (!api_uri) {
        console.error('API URI is not defined in the environment variables');
        return; // Return early if API URI is not available
    }

    try {
           const response = await axios.post(`${api_uri}/api/v1/recipe/find-recipe`, {
            query: userQuery,
            ingredients: userIngredients
        }, { withCredentials: true });

        return response.data;
    } catch (error) {
        console.error('API error:', error);
        return error;
    }
}


export const startServer=async()=>{
    if(!api_uri){
        return;
    }
    try {
        const expressRes =await axios.get(`${api_uri}`)
        const modelRes=await axios.get(`${api_uri}/api/v1/recipe/`)
        if(expressRes.data?.statusCode===200 && modelRes.data?.statusCode===200){
            console.log('Working');
        }
        else{
            console.log('Server is Down');
        }

    } catch (error) {
        console.log('Server Issue');
        
    }
}