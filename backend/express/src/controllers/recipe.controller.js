import { APIResponse } from '../utilities/APIResponse.js';
import { AsyncHandler } from '../utilities/AsyncHandler.js';
import axios from 'axios';

// Check the health of the backend service
const checkHealth = AsyncHandler(async (req, res) => {
    try {
        const apiUrl = process.env.MODEL_API_URL;
        if (!apiUrl) {
            console.error('MODEL_API_URL is not set in the environment variables');
            return res
                .status(500)
                .json(new APIResponse(500, {}, 'Internal Server Error: Missing API URL'));
        }

        const response = await axios.get(`${apiUrl}/`, { withCredentials: true });

        return res
            .status(200)
            .json(new APIResponse(200, response.data, 'Server Running'));

    } catch (error) {
        console.error('Error while connecting to the server:', error.message);
        return res
            .status(500)
            .json(new APIResponse(500, {}, 'Failed to connect to the server'));
    }
});

// Fetch recipes based on user input
const findRecipe = AsyncHandler(async (req, res) => {
    try {
        const apiUrl = process.env.MODEL_API_URL;
        if (!apiUrl) {
            console.error('MODEL_API_URL is not set in the environment variables');
            return res
                .status(500)
                .json(new APIResponse(500, {}, 'Internal Server Error: Missing API URL'));
        }

        // Validate the request body
        const { query, ingredients } = req.body;
        if (!query && !ingredients) {
            return res
                .status(400)
                .json(new APIResponse(400, {}, 'At least one of "query" or "ingredients" must be provided'));
        }

        console.log('Fetching recipe with query:', query, 'and ingredients:', ingredients);

        const response = await axios.post(
            `${apiUrl}/get-recipe`,
            { query, ingredients },
            { withCredentials: true }
        );

        if (response.status === 200) {
            return res
                .status(200)
                .json(new APIResponse(200, response.data, 'Successfully fetched recipes'));
        } else {
            console.warn('No data available from the API');
            return res
                .status(404)
                .json(new APIResponse(404, {}, 'Recipes not available'));
        }

    } catch (error) {
        console.error('Error fetching recipe:', error.message);
        return res
            .status(500)
            .json(new APIResponse(500, {}, 'Failed to fetch recipes'));
    }
});

export {
    checkHealth,
    findRecipe
};
