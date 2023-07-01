const express = require('express');
const fs=require("fs");

const app=express();

app.use(express.json()); // middleware

app.get('/',(req,res)=>{
    res.setHeader('Content-type','text/html')
    // res.end('<h1>HOME PAGE</h1>')
    res.send('<h1>HOME PAGE</h1>')
})

app.get('/data',(req,res)=>{
   const dataStream=fs.createReadStream('./data.json','utf-8');
   dataStream.pipe(res);
})

app.post('/adddata',(req,res)=>{
    console.log(req.body);
    res.send('Data has been added');
})

app.get("/students",(req,res)=>{
    const data = fs.readFileSync("./data.json","utf-8");
    const parsed_data=JSON.parse(data)
    // console.log(parsed_data.student);
    res.send(parsed_data.student)
})
app.get("/teachers",(req,res)=>{
    const data = fs.readFileSync("./data.json","utf-8");
    const parsed_data=JSON.parse(data)
    // console.log(parsed_data.teachers);
    res.send(parsed_data1.teachers)
})
app.post("/addStudent",(req,res)=>{
    // Step1 => Get the complete data
    const data=fs.readFileSync('./data.json','utf-8')
    // Step2 => Parse to add the data
    const parsed_data=JSON.parse(data)
    // Step3 => Add the data in students
    parsed_data.student.push(req.body)
    // adding to the data file
    fs.writeFileSync('./data.json',JSON.stringify(parsed_data));
    console.log(parsed_data);
    res.send('Look in terminal');
})
app.delete("/deleteStudent",(req,res)=>{
    // Step1 => Get the complete data
    const data=fs.readFileSync('./data.json','utf-8')
    // Step2 => Parse to add the data
    const parsed_data=JSON.parse(data)
    const new_student_data=parsed_data.student.filter((el)=>{
        return el.name !== "Ramil"
    })
    console.log(new_student_data);
    res.send('Date has been deleted');
})
app.listen(4500,()=>{
console.log('Server is running at port No 4500');
})