const mongoose = require('mongoose');
require('dotenv').config();


const connection = mongoose.connect(process.env.mongoURL);

// Basic Structure of the data

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    language: { type: String, required: true },
    is_married: { type: Boolean, required: true },
}, {
    versionKey: false
});

const UserModel = mongoose.model("studentDetail", userSchema)
module.exports = {
    connection, UserModel
}