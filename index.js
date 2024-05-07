
const express=require ('express');
const mongoose=require ('mongoose')

const app=express();

app.use(express.json());  


mongoose.connect('mongodb://localhost:27017/nishant').then(()=>{
    console.log("DataBase is connected")
})



const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
});
const userModel=mongoose.model("users",userSchema)

app.get("/getusers", async(req,res)=>{
const userData=await userModel.find();
res.json(userData);
});

Port=4000;
const start=async()=>{
    try{app.listen(4000,()=>{
        console.log(`server is running at: ${Port}`);
    })
    }catch(err){
 console.log(error);
    }
};
start();

// app.get("/getUsers",async(req,res)=>{
//     const userData=userModel.find(
//         res.json(userData)
//     )
// })
