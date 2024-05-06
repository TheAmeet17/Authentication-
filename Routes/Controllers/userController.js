const userModel=require("../models/user");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const Signup = async(req,res)=>{
//Existing USer
//HAshed password generate 
//user creation
//Token Generate
const {username,password,email}=req.body;
try {
    const existinguser=await userModel.findone({email:email});
    if(existinguser){
        return res.status(400).json({message:"user already existed"});

    }
const hashedpassword=await bcrypt.hash(password,10);

const result=await userModel.create({
    email:email,
    password:hashedpassword,
    username:username
});

const token=jwt.sign({email:result.mail,id:result._id},SECRET_KEY);
res.status(201).json({user:result,token:token});
} catch (error) {
    console.log(error);
    res.status(500).json({message:"Something went wrong"});
}


}


const signin =(req,res)=>{

}
module.exports={Signup,signin};