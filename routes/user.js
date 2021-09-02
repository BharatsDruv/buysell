const express=require('express')
const router=express.Router()

const {sayHi}=require('../controllers/user');

router.get('/api',sayHi);

module.exports=router;