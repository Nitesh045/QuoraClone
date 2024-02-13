const mongoose= require('mongoose');
const env= require('dotenv').config();
const dbUri= "mongodb://127.0.0.1:27017/QuoraDataBase";
console.log(process.env.MONGODb);
mongoose.connect(dbUri)
.then(()=>console.log('database conenct'))
.catch((e)=>console.log(e))


