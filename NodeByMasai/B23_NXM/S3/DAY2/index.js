const express = require("express");
const { connection, UserModel } = require("./db.js")

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("WELCOME")
})
app.get("/users", async (req, res) => {
    let query = req.query
    try {
        const users = await UserModel.find(query);
        res.send(users)
    } catch (error) {
        res.send({ "msg": "Cannot get users", "error": err.message }) 
    }
})

app.patch("/update/:id",async(req,res)=>{
    const ID = req.params.id;
    const payLoad = req.body;
    try {
        await UserModel.findByIdAndUpdate({_id:ID},payLoad);
        res.send('Users has been updated');
    } catch (error) {
        res.send({ "msg": "Cannot modify", "error": err.message })

    }
})
app.delete("/delete/:id",async(req,res)=>{
    const ID = req.params.id;
    try {
        await UserModel.findByIdAndDelete({_id:ID});
        res.send('Users has been deleted');
    } catch (error) {
        res.send({ "msg": "Cannot deleted", "error": err.message })
    }
})


try {
    app.post("/register", async (req, res) => {

        const user = new UserModel(req.body)
        await user.save();
        res.send({ "msg": "User has been registered" })
    })
} catch (error) {
    res.send({ "msg": "Cannot register", "error": err.message })
}



app.listen(4500, async () => {
    try {
        await connection;
        console.log('Connected to the DB');
    } catch (error) {
        console.log('Cannot connect to DB');
        console.log(error);
    }
    console.log('Running the server at port 4500');
})

