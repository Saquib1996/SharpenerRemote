// const express=require("express");

// const app = express();

// const fs = require('fs');

// const {routeLogger} = require('./middlewares/LoggerMiddleware');
// const { log } = require("console");

// // app.use((req,res,next)=>{
// //     console.log('Hello from MIDDLEWARE'); // 1
// //     next();
// //     console.log('BYE FROM MIDDLEWARE'); // 3
// // })


// // app.use((req,res,next)=>{
// //    if(req.url === '/about'){
// //     next()
// //    }else{
// //         res.send('Not Permitted')
// //    }
// // })

// // const timeLogger=(req,res,next) => {
// //     const startTime = new Date().getTime();
// //     next();
// //     const endTime = new Date().getTime();
// //     console.log(`It took ${endTime-startTime} ms to give the response`);
// // }



// // app.use(timeLogger);
// // app.use(routeLogger);

// const first = (req,res,next) => {
//     console.log('1');
//     next();
//     console.log('2');
// }
// const second = (req,res,next) => {
//     console.log('3');
//     next();
//     console.log('4');
// }
// const third = (req,res,next) => {
//     console.log('5');
//     next();
//     console.log('6');
// }

// // app.use(first,second,third);
// app.use(first,third,second);
// // app.use((req,res,next) => {
// //     console.log('1');
// //     next();
// //     console.log('2');
// // });
// // app.use((req,res,next) => {
// //     console.log('3');
// //     next();
// //     console.log('4');
// // });
// // app.use((req,res,next) => {
// //     console.log('5');
// //     next();
// //     console.log('6');
// // });

// app.get("/",(req,res)=>{
//     console.log('HOME PAGE'); // 2
//     res.send('<h1>THIS IS HOME PAGE</h1>')   
// })

// app.get("/about",(req,res)=>{
//     console.log('ABOUT PAGE');
//     res.send('<h1>THIS IS ABOUT PAGE</h1>')   
// })

// app.get("/contact",(req,res)=>{
//     console.log('CONTACT PAGE');
//     res.send('<h1>THIS IS CONTACT PAGE</h1>')   
// })

// app.get("/data",(req,res)=>{
//     let data = fs.readFileSync('./data.json','utf-8')
//     // console.log('DATA PAGE');
//     res.send(data)   
// })

// app.listen(4500,()=>{
//     console.log("Server is running at 4500");
// })


/********************************************************************************************/

// const express=require("express");


// const app = express();

// const fs = require('fs');
// const cors = require('cors');
// app.use(express.json())
// app.use(cors())

// const {routeLogger} = require('./middlewares/LoggerMiddleware');
// // const { log } = require("console");
// app.get("/",(req,res)=>{
//     console.log('HOME PAGE'); // 2
//     res.send('<h1>THIS IS HOME PAGE</h1>')   
// })

// app.get("/getStudent",(req,res)=>{
//     res.send('<h1>ALL THE STUDENT DETAILS</h1>')   
// })

// app.post("/addStudent",(req,res)=>{
//     console.log(req.body);
//     res.send('<h1>STUDENTS GET ADDED</h1>')   
// })

// app.get("/getTeachers",(req,res)=>{
//     res.send('<h1>ALL THE TEACHERS DETAILS</h1>')   
// })
// app.post("/addTeachers",(req,res)=>{
//     console.log(req.body);
//     res.send('<h1>TEACHERS GET ADDED</h1>')
// })

// app.listen(4500,()=>{
//     console.log("Server is running at 4500");
// })

/****************************************************************************************/

// const express = require("express");


// const app = express();

// const fs = require('fs');
// const cors = require('cors');
// app.use(express.json())
// app.use(cors());
// const { teacherRouter } = require('./routes/TeacherRoutes');
// const { studentRouter } = require('./routes/StudentRoutes');

// const { routeLogger } = require('./middlewares/LoggerMiddleware');
// app.get("/", (req, res) => {
//     console.log('HOME PAGE'); // 2
//     res.send('<h1>THIS IS HOME PAGE</h1>')
// })

// app.listen(4500, () => {
//     console.log("Server is running at 4500");
// })

/************************************************************************************** */

// const express = require("express");


// const app = express();

// const fs = require('fs');
// const cors = require('cors');
// app.use(express.json())
// app.use(cors());
// const { teacherRouter } = require('./routes/TeacherRoutes');
// const { studentRouter } = require('./routes/StudentRoutes');

// const { routeLogger } = require('./middlewares/LoggerMiddleware');
// app.get("/", (req, res) => {
//     console.log('HOME PAGE'); // 2
//     res.send('<h1>THIS IS HOME PAGE</h1>')
// })

// app.get('/wapi',(req,res)=>{
//     let data={
//         banglore:'25C',
//         delhi:'45C',
//         pune:'14C'
//     }
//     const {city} = req.query;

//     // if(city === 'pune') res.send(`Details of ${city}`);
//     // else if (city==="delhi") res.send(`Details of ${city}`);
//     // else res.send('NA')

//     res.send(`The temperature at ${city} is ${data[city]}`)
// })

// app.listen(4500, () => {
//     console.log("Server is running at 4500");
// })

/************************************************************************************/

// const express = require("express");


// const app = express();

// const fs = require('fs');
// const cors = require('cors');
// app.use(express.json())
// app.use(cors());
// // const { teacherRouter } = require('./routes/TeacherRoutes');
// // const { studentRouter } = require('./routes/StudentRoutes');

// const { routeLogger } = require('./middlewares/LoggerMiddleware');
// app.get("/", (req, res) => {
//     console.log('HOME PAGE'); // 2
//     res.send('<h1>THIS IS HOME PAGE</h1>')
// })

// app.get('/wapi',(req,res)=>{
//     let data={
//         banglore:'25C',
//         delhi:'45C',
//         pune:'14C'
//     }
//     const {city} = req.query;
//     res.send(`The temperature at ${city} is ${data[city]}`)
// })

// app.get('/students/:id',(req,res)=>{
//     const roll_no = req.params.id
//     res.send(`The details of student with roll no: ${roll_no}`)
// })

// app.listen(4500, () => {
//     console.log("Server is running at 4500");
// })

/*************************************************************************** */

const express = require("express");


const app = express();

const fs = require('fs');
const cors = require('cors');
app.use(express.json())
app.use(cors());
// const { teacherRouter } = require('./routes/TeacherRoutes');
// const { studentRouter } = require('./routes/StudentRoutes');

const { routeLogger } = require('./middlewares/LoggerMiddleware');
app.get("/", (req, res) => {
    console.log('HOME PAGE'); // 2
    res.send('<h1>THIS IS HOME PAGE</h1>')
})

app.get('/wapi', (req, res) => {
    console.log(req.query);
    if (req.query.city1 && !req.query.city2) {
        res.send(`${req.query.city1} is there`)
    } else if (req.query.city2 && !req.query.city1) {
        res.send(`${req.query.city2} is there`)
    }else{
        res.send(`${req.query.city1} & ${req.query.city2} is there `)
    }
    res.send(`See it in terminal`)
})

// app.get('/students/:id',(req,res)=>{
//     const roll_no = req.params.id
//     res.send(`The details of student with roll no: ${roll_no}`)
// })


app.listen(4500, () => {
    console.log("Server is running at 4500");
})