const express = require("express");

const {UserModel}=require("../model/User.model");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt")

const userRouter = express.Router();

userRouter.post("/register",async(req,res)=>{
    const {name,email,pass} = req.body
    try {
        bcrypt.hash(pass,5,async(err,hash)=>{
            // Store hash in your password DB.
            if(err){
                res.send({"msg":"Something went wrong","error":err.message});
            }else{
                const user = new UserModel({name,email,pass:hash});
                await user.save();
                res.send({"msg":"New users has been registered"});
            }
        });
        
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error.message})
    }  
})

userRouter.post("/login",async(req,res)=>{
    const {email,pass} =req.body;
    try {
        const user = await UserModel.find({email});
        if(user.length>0){
            bcrypt.compare(pass , user[0].pass,(err,result)=>{
                if(result){
                    let token = jwt.sign({userID:user[0]._id},"masai");
                    res.send({"msg":"Logged in","token":token});
                } else {
                    res.send({"msg":"Wrong credentials"})
                }
            });
            
        }else{
            res.send({"msg":"Wrong Credentials"});
        }
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error.message})
    }
})

module.exports = {
    userRouter
}