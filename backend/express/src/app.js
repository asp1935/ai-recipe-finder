import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors({
    origin: process.env.ORIGIN_ACCESS_URL,
    credentials: true,
}));

app.use(express.json({limit:'16kb'}));

app.use(express.urlencoded({extended:true,limit:'16kb'}));

app.use(express.static('public'));

app.use(cookieParser());

app.get('/',(req,res)=>{
    return res.status(200)
        .json({'statusCode':200,data:'Server is runing','message':'Server running Fine'})
})

import recipeRouter from './routes/recipe.route.js';


app.use('/api/v1/recipe',recipeRouter);


export {app};

