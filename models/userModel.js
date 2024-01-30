import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please provide a username"]
    },
    email:{
        type:String,
        required:[true, "Please provide an email"],
        unique:[true, "Email already taken"]
    },
    password:{
        type:String,
        required:[true, "Please provide a password"]
    }
})

export const User=new mongoose.model("User",userSchema);