const express = require("express");
const { connection, UserModel } = require("./db");
require('dotenv').config();
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("WELCOME");
});

app.get("/users", async (req, res) => {
    let query = req.query;
    console.log(query);
    try {
        const users = await UserModel.find(query);
        res.send(users)
    } catch (error) {
        console.log(error.message);
    }
    // res.send("All the users will be sent")
});

app.patch("/update/:id",async (req,res)=>{
    const ID = req.params.id;
    const payload=req.body;
    try {
        await UserModel.findByIdAndUpdate({_id:ID},payload);
        res.send({"msg":"Users have been updated"})
    } catch (error) {
        res.send({"msg":"Cannot modify","error":error.message})
    }
})
app.delete("/delete/:id",async (req,res)=>{
    const ID = req.params.id;
    try {
        await UserModel.findByIdAndDelete({_id:ID});
        res.send({"msg":"User has been deleted"})
    } catch (error) {
        res.send({"msg":"Cannot be deleted","error":error.message})
    }
})

app.post("/register", async (req, res) => {
    try {

        console.log(req.body);
        const user = new UserModel(req.body);
        await user.save()
        res.send({ "msg": "Users has been registered" });
    } catch (error) {
        res.send({ "msg": "Cannot register", "error": error.message })
    }
    // res.end();
})

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to the DB");
    } catch (error) {
        console.log("Cannot connected to the DB");
        console.log(error);
    }
    console.log(`Running the server at port ${process.env.port}`);
})