const express=require('express')
const router=express.Router()

router.get('/api',(req,res)=>{
    res.send("hello from node");
});

module.exports=router;