const express = require('express');

const teacherRouter = express.Router();

teacherRouter.get("/getTeachers", (req, res) => {
    res.send('<h1>ALL THE TEACHERS DETAILS</h1>')
})
teacherRouter.post("/addTeachers", (req, res) => {
    console.log(req.body);
    res.send('<h1>TEACHERS GET ADDED</h1>')
})

module.exports = { teacherRouter }