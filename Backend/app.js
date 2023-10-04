import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user-routes";
import blogRouter from './routes/blog-routes';
const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.connect(
    'mongodb+srv://hassan:hassan@cluster0.jihahkb.mongodb.net/Blog?retryWrites=true&w=majority'
).then(() => app.listen(5000))
    .then(() => console.log('Connected to Database and listening to localhost 5000'))
    .catch((error) => console.log(error))


