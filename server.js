import express  from "express"
import dotenv from "dotenv"
import errorHandler  from "./middlewares/errorHandler.js"
import connectDb from "./config/dbConnection.js"
import taskRoutes from "./routes/taskRoutes.js"
import userRoutes from "./routes/userRoutes.js"
dotenv.config();

connectDb();
const app=express();

const port=process.env.PORT; 

app.use(express.json());
app.use("/api/tasks",taskRoutes);
app.use("/api/users",userRoutes);

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is listening on the port ${port}...`);
})