const express= require('express')
const app=express();


const conection= require('../backend/conn/server')
// cors.........................here



// routes

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
app.use('/uploads',express.static(path.join(__dirname,"/../Quora/dist")));

app.get("*",(req,res)=>{
    try {

        res.sendFile(path.join(__dirname,"/../Quora/dist/index.html"))
    } catch (error) {
        console.log(error);
    }
});

const questionRoute= require('./routes/question')

app.use(questionRoute);

app.listen(5000,()=>{
    console.log('server start 5000')
})