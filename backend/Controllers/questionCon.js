const express= require('express');
const router= express.Router();
const questionSchema= require('../models/questionSchema');
const questionRoute=require('../routes/question')


module.exports.question_post= async(req,res)=>{
    console.log(req.body)
    try {
        await questionSchema.create({
            questionName:req.body.questionName,
            questionUrl:req.body.questionUrl
        }).then(()=>{
            res.status(201).send({
                status:true,
                message:"question add seccessfully"
            });
        }).catch(()=>{
            res.status(400).send({
                status:false,
                message:"bad request"
            });
        });
    } catch (error) {
        console.log(error)
    }
}
