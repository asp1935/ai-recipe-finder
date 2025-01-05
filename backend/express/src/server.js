import dotenv from 'dotenv';
import { app } from './app.js';

const port = process.env.EX_PORT || 8000;

dotenv.config();

app.on("error",(err)=>{
    console.log('Server not able to start');
    throw err
})


app.listen(port,()=>{
    console.log(`Server is listing on ${port}`);
})
