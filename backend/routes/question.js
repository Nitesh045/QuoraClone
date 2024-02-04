const {Router}=require('express');
const router=Router();
const questionController=require('../Controllers/questionCon');
router.post('/question',questionController.question_post)
module.exports=router