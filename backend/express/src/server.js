import dotenv from 'dotenv';
import { app } from './app.js';


dotenv.config();

app.on("error",(err)=>{
    console.log('Server not able to start');
    throw err
})

app.listen(process.env.EX_PORT || 8000,()=>{
    console.log(`Server is listing on ${process.env.EX_PORT || 8000}`);
})
