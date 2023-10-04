import mongoose from 'mongoose';
import BlogModel from '../model/Blog';
import UserModel from '../model/User';

const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await BlogModel.find();
    } catch (error) {
        return console.log(error);
    }

    if (!blogs) {
        return res.status(404).json({ "message": "No Blogs Found" })
    }

    return res.status(200).json({ blogs })
}

const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;

    let existingUser;
    try {
        existingUser = await UserModel.findById(user);
    } catch (error) {
        return console.log(error);
    }
    if (!existingUser) {
        return res.status(400).json({ "message": "Unable to find user by this ID" })
    }
    const blog = new BlogModel({
        title,
        description,
        image,
        user
    });
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save(session);
        existingUser.blogs.push(blog);
        await existingUser.save(session);
        await session.commitTransaction();
    } catch (error) {
        return console.log(error);
        return res.status(500).json({ "message": error })
    }

    return res.status(200).json(blog)
}

const updateBlog = async (req, res, next) => {
    const { title, description } = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await BlogModel.findByIdAndUpdate(blogId, { title, description })
    } catch (error) {
        return console.log(error);
    }

    if (!blog) {
        return res.status(500).json({ "message": "Unable to Update the Blog" })
    }

    return res.status(200).json({ blog });
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await BlogModel.findById(id);
    } catch (error) {
        return console.log(error);
    }
    if (!blog) {
        return res.stat(404).json({ "message": "No Blog Found" })
    }
    return res.status(200).json({ blog })
}

const deleteBlog = async (req, res, next) => {
    const blogId = req.params.id;
    let blog;
    try {
        blog = await BlogModel.findByIdAndRemove(blogId).populate("user");
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    } catch (error) {
        return console.log(error);
    }

    if (!blog) {
        return res.status(500).json({ "message": "Unable to Delete the Blog" })
    }

    return res.status(200).json({ "message": "Blog successfully deleted" });

}
export { getAllBlogs, addBlog, updateBlog, getById, deleteBlog };