import mongoose from "mongoose";

const taskSchema=mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        required:[true, "Please provide a userID"]
    },
    title:{
        type:String,
        required:[true, "Please provide a title"],
    },
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
        default:false
    }
});

export const Task=new mongoose.model("Task",taskSchema);