const express= require('express')
const app=express();


const conection= require('../backend/conn/server')
// cors.........................here



// routes
const router= require('./routes/main')
const cors= require('cors');
app.use(cors());
app.use((req,res,next)=>{
    req.header('Access-Control-Allow-Origin',"*")
    req.header('Access-Control-Allow-Headers',"*")
    next();
});

// body parser
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// path
const path = require('path')
app.use('/uploads',express.static(path.join(__dirname,"/../uploads")));
app.use('/uploads',express.static(path.join(__dirname,"/../frontend/build")));

// app.get("*",(req,res)=>{
//     try {
//         res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
//     } catch (error) {
//         console.log(error);
//     }
// });


app.use('/nitesh',router)

app.listen(5000,()=>{
    console.log('server start 5000')
})