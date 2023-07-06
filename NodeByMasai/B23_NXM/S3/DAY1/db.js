// const mongoose = require('mongoose');

// const main=()=>{
//     const connection = mongoose.connect("mongodb://127.0.0.1:27017/");
//     console.log("Connected to Mongo");
// }

// main();

/******************************************************************************************************************/

// const mongoose = require('mongoose');

// const main = async () => {
//     try {
//         const connection = await mongoose.connect("mongodb://127.0.0.1:27017/backend");
//         console.log("Connected to DB");
//         // await StudentModel.insertMany([{ name: "Chunnu", age: 21, city: "Banglore" }, { name: "Major", age: 23, city: "Darbhanga" }])
//         // const student=new StudentModel({
//         //     name:"Pulkit",
//         //     age:23,
//         //     city:"Delhi"
//         // })

//         // await student.save();

//         console.log('Following is the data from DB');
//         const students = await StudentModel.find({$and:[{age:{$gte:22}},{age:{$lte:30}}]});
//         console.log(students);
//         connection.disconnect();
//         console.log('Disconnected');
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();
// // Creating structure of the data that I want to store in DB
// const studentSchema = mongoose.Schema(
//     {
//         name: String,
//         age: Number,
//         city: String
//     },
//     {
//         versionKey: false
//     }
// )
// // Creating the model
// const StudentModel = mongoose.model('student', studentSchema);



// /*******************************************************************************************************************/

// // Delete

// const mongoose = require('mongoose');

// const main = async () => {
//     try {
//         const connection = await mongoose.connect("mongodb://127.0.0.1:27017/backend");
//         console.log("Connected to DB");
//         // await StudentModel.insertMany([{ name: "Chunnu", age: 21, city: "Banglore" }, { name: "Major", age: 23, city: "Darbhanga" }])
//         // const student=new StudentModel({
//         //     name:"Pulkit",
//         //     age:23,
//         //     city:"Delhi"
//         // })

//         // await student.save();

//         console.log('connected to db');
//         const students = await StudentModel.deleteMany({$and:[{age:{$gte:22}},{age:{$lte:30}}]});
//         console.log(students);
//         connection.disconnect();
//         console.log('Disconnected');
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();
// // Creating structure of the data that I want to store in DB
// const studentSchema = mongoose.Schema(
//     {
//         name: String,
//         age: Number,
//         city: String
//     },
//     {
//         versionKey: false
//     }
// )
// // Creating the model

// const StudentModel = mongoose.model('student', studentSchema);

/*******************************************************************************************************************/


/*******************************************************************************************************************/



// const mongoose = require('mongoose');

// const main = async () => {
//     try {
//         const connection = await mongoose.connect("mongodb://127.0.0.1:27017/backend");
//         console.log("Connected to DB");
//         const student=new StudentModel({
//             name:"Aman",
//             age:19,
//             city:"Patna"
//         })

//         await student.save();

//         console.log('Inserted');
//         connection.disconnect();
//         console.log('Disconnected');
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();
// // Creating structure of the data that I want to store in DB
// const studentSchema = mongoose.Schema(
//     {
//         name: String,
//         age: Number,
//         city: String
//     },
//     {
//         versionKey: false
//     }
// )

// // Creating the model

// const StudentModel = mongoose.model('student', studentSchema);


/*******************************************************************************************************************/



const mongoose = require('mongoose');

const main = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/backend");
        console.log("Connected to DB");
        
        const student=new StudentModel({
            name:"Tamya",
            age:64,
            city:"Kupwara"
        })

        await student.save();

        console.log('Inserted');
        connection.disconnect();
        console.log('Disconnected');
    } catch (error) {
        console.log(error);
    }
}
main();
// Creating structure of the data that I want to store in DB
const studentSchema = mongoose.Schema(
    {
        name: {type:String,required:true},
        age: {type:Number,required:true},
        city:{type:String,required:true}
    },
    {
        versionKey: false
    }
)
// Creating the model

const StudentModel = mongoose.model('student', studentSchema);