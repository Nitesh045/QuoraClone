const express= require('express')
const router=express.Router();
// const questionRouter= require('./question');
// const answerRouter= require('./answer');
router.get('/',(req,res)=>{
    res.send('home router');
   
});

// router.use('/question',questionRouter);
// router.use('/answer',answerRouter);

module.exports=router;
