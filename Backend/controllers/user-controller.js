
import UserModel from "../model/User";

import bcrypt from 'bcryptjs';

const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await UserModel.find();
        console.log(users);
    } catch (error) {
        console.log(error.message);
    }
    if (!users) {
        return res.status(404).json({ "message": "No Users found" });
    }
    return res.status(200).json({ users });
}

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUser;
    try {
        existingUser = await UserModel.findOne({ email })
    } catch (error) {
        console.log(error.message);
    }

    if (existingUser) {
        return res.status(400).json({ "message": "User Already Exists! Login instead" })
    }

    const hashedPassword = bcrypt.hashSync(password);
    const user = new UserModel({
        name,
        email,
        password: hashedPassword,
        blogs:[]
    });


    try {
        await user.save();
    } catch (error) {
        console.log(error.message);
    }

    return res.status(201).json({ user });
}

const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await UserModel.findOne({ email })
    } catch (error) {
        console.log(error.message);
    }

    if (!existingUser) {
        return res.status(404).json({ "message": "Could not find the user by this Email" })
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({"message":"Incorrect Password"});
    }

    return res.status(200).json({message:"Login Successful"})
}

export { getAllUser, signup,login };

