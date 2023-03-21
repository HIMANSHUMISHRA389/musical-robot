const app=require('./app');
const dotenv=require('dotenv');
const path=require('path');


const PORT1 = process.env.PORT||5000;


dotenv.config({path:'backend/config/config.env'});






app.listen(PORT1,()=>{
    console.log(`server is started at http://localhost:${PORT1}`);
})