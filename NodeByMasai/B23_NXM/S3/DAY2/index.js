const express = require("express");
require('dotenv').config();
const { connection } = require("./db.js");

const {userRouter} = require("./Routes/usersRoutes.js")

const { UserModel } = require("./Model/usersModel.js")

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("WELCOME")
})
app.use("/users",userRouter)
app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log('Connected to the DB');
    } catch (error) {
        console.log('Cannot connect to DB');
        console.log(error);
    }
    console.log(`Running the server at port ${process.env.port}`);
})

