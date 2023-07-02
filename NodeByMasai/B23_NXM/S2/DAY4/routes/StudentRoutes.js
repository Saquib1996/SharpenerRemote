const express = require('express');

const studentRouter = express.Router();

studentRouter.get("/getStudent", (req, res) => {
    res.send('<h1>ALL THE STUDENT DETAILS</h1>')
})

studentRouter.post("/addStudent", (req, res) => {
    console.log(req.body);
    res.send('<h1>STUDENTS GET ADDED</h1>')
})

module.exports = { studentRouter }