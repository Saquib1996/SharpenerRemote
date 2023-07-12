const express = require("express");

const {UserModel} = require("../Model/usersModel.js")

const userRouter = express.Router();


userRouter.get("/", async (req, res) => {
    let query = req.query
    try {
        const users = await UserModel.find(query);
        res.send(users)
    } catch (error) {
        res.send({ "msg": "Cannot get users", "error": err.message }) 
    }
})

userRouter.patch("/update/:id",async(req,res)=>{
    const ID = req.params.id;
    const payLoad = req.body;
    try {
        await UserModel.findByIdAndUpdate({_id:ID},payLoad);
        res.send('Users has been updated');
    } catch (error) {
        res.send({ "msg": "Cannot modify", "error": err.message })

    }
})
userRouter.delete("/delete/:id",async(req,res)=>{
    const ID = req.params.id;
    try {
        await UserModel.findByIdAndDelete({_id:ID});
        res.send('Users has been deleted');
    } catch (error) {
        res.send({ "msg": "Cannot deleted", "error": err.message })
    }
})


try {
    userRouter.post("/register", async (req, res) => {

        const user = new UserModel(req.body)
        await user.save();
        res.send({ "msg": "User has been registered" })
    })
} catch (error) {
    res.send({ "msg": "Cannot register", "error": err.message })
}

module.exports = {
    userRouter
}