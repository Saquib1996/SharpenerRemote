const mongoose = require('mongoose');

const main = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/backend");
        console.log('Connected to DB');
        // await StudentModel.insertMany([{ name: "Sharoz", age: 34, city: "Banglore" }, { name: "Major", age: 32, city: "Darbhanga" }])
        // const student = new StudentModel({
        //     name:"Anjali Tarak Mehta",
        //     age:34,
        //     city:"Mumbai",
        //     Address:"Gokuldham Society"
        // })
        // await student.save();
        console.log("Deleted from DB");
        // await StudentModel.deleteMany({$and:[{age:{$gte:20}},{age:{$lte:32}}]});
        await StudentModel.deleteMany({_id:"6519c64c95642d1e18dfc301"})
        connection.disconnect();
        console.log("Disconnected from DB");
    } catch (error) {
        console.log(error);
    }

}

main();

const studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    Address:String
},
  {versionKey: false}
);

const StudentModel = mongoose.model("children", studentSchema);

let a = 56;
let b = a.toString();
console.log(typeof(a));
console.log(typeof(b));