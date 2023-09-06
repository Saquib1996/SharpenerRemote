const express = require('express');
const {connection} = require("./configs/db");

const {UserModel} = require("./model/User.model");

const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.post("/register",async (req,res)=>{
    const userDetail = req.body;
    try {
        const user = new UserModel(userDetail)
        await user.save();
        res.send({"msg":"User Registered"})
    } catch (error) {
        res.send({"msg":error.message});
    }
    res.send({"msg":"User Registered"})
})

app.post("/login",async(req,res)=>{
    const {email,pass} = req.body;
    const token = jwt.sign({course:'backend'},'masai');
    try {
        const user = await UserModel.find({email,pass});
        if(user.length > 0){
            res.send({"msg":"Login Successful","token":token});
        }else{
            res.send({"msg":"Wrong Credentials"})
        }
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error.message});
    }
})

app.get("/data",(req,res)=>{
    const token = req.headers.authorization;
    jwt.verify(token,'masai',(err,decoded)=>{
        if(decoded){
            res.send({"msg":"Data is here......"});
        }else{
            res.send({"msg":"Something went wrong","error":err.message})
        }
    });
});

app.get("/cartproducts",(req,res)=>{
    const token = req.headers.authorization;
    jwt.verify(token,'masai',(err,decoded)=>{
        if(decoded){
            res.send({"msg":"Data is here......"});
        }else{
            res.send({"msg":"Something went wrong","error":err.message})
        }
    });
})

app.get("/about",(req,res)=>{
    res.send("This is Cart Page");
})


app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to the DB");
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error.message})
        console.log(error);
    }
    console.log('Running at port 8080');
})