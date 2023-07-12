const mongoose = require('mongoose')
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

module.exports = { UserModel };