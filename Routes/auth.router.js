const express=require ('express')
const {Signup,signin}=require("../Routes/Controllers/userController");

const userrouter=express.Router();


import {router} from 'express'
const app=router();

router.post("/Signup",(req,res)=>{
    res.send("Signup requested");
});

router.post("/signin",(req,res)=>{
    res.send("signin requested")
});
module.exports=userRouter;