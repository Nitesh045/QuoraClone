const mongoose= require('mongoose');
const dbUri= 'mongodb://127.0.0.1:27017/QuoraDataBase';

mongoose.connect(dbUri)
.then(()=>console.log('database conenct'))
.catch((e)=>console.log(e))


