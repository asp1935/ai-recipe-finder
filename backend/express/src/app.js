import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();
import axios from 'axios';
import { APIResponse } from './utilities/APIResponse.js';

app.use(cors({
    origin: process.env.ORIGIN_ACCESS_URL,
    credentials: true,
}));

app.use(express.json({ limit: '16kb' }));

app.use(express.urlencoded({ extended: true, limit: '16kb' }));

app.use(express.static('public'));

app.use(cookieParser());

app.get('/', async(req, res) => {
    const apiUrl = process.env.MODEL_API_URL;
    if (!apiUrl) {
        console.error('MODEL_API_URL is not set in the environment variables');
        return res
            .status(500)
            .json(new APIResponse(500, {}, 'Internal Server Error: Missing API URL'));
    }

    
    return res.status(200)
        .json({ 'statusCode': 200, data: 'Server 1 is runing', 'message': 'Server 1 running Fine' })
})

import recipeRouter from './routes/recipe.route.js';


app.use('/api/v1/recipe', recipeRouter);


export { app };

