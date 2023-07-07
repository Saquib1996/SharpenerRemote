const mongoose = require('mongoose')

const connection = mongoose.connect("mongodb://127.0.0.1:27017/university")


// Basic structure of the data

const usersSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    language: { type: String, required: true },
    is_Married: { type: Boolean, required: true }
}, {
    versionKey: false
})

// Model for the data (constructor function)

const UserModel = mongoose.model("user", usersSchema);
module.exports = { connection, UserModel };