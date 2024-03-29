import asyncHandler from "express-async-handler";
import {Task} from "../models/taskModel.js";

//@desc Get all tasks
//@route GET /api/tasks
//@access private
const getTasks = asyncHandler(async (req,res)=>{
    const tasks=await Task.find({user_id:req.user.id});
    res.status(200).json(tasks);
});

//@desc create task
//@route POST /api/tasks
//@access private
const createTask = asyncHandler(async (req,res)=>{
    console.log("The request body is:",req.body);
    const {title,description}=req.body;
    if(!title || !description)
    {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const task = await Task.create({
        title, description, user_id:req.user.id
    });

    res.status(201).json(task);
});

//@desc Get task
//@route GET /api/tasks/:id
//@access private
const getTask = asyncHandler(async (req,res)=>{
    const task = await Task.findById(req.params.id);

    if(!task){
        res.status(404);
        throw new Error("Task Not Found");
    }
    res.status(200).json(task);
});

//@desc Update task
//@route PATCH /api/tasks/:id
//@access private
const updateTask = asyncHandler(async (req,res)=>{

    const task = await Task.findById(req.params.id);

    if(!task){
        res.status(404);
        throw new Error("Task Not Found");
    }
    
    if(task.user_id.toString() !== req.user.id )
    {
        res.status(403);
        throw new Error("User doesn't have permission to update other users' task")
    }
    const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
    
    res.status(200).json(updatedTask);
});

//@desc delete task
//@route DELETE /api/tasks/:id
//@access private
const deleteTask = asyncHandler(async (req,res)=>{

    const task = await Task.findById(req.params.id);

    if(!task){
        res.status(404);
        throw new Error("Task Not Found");
    }
    
    if(task.user_id.toString() !== req.user.id )
    {
        res.status(403);
        throw new Error("User doesn't have permission to delete other users' task")
    }

    await Task.findByIdAndDelete({_id: req.params.id})

    res.status(200).json(task);
});

//@desc mark as complete
//@route PATCH /api/tasks/complete/:id
//@access private
const completeTask = asyncHandler(async (req,res)=>{

    const task = await Task.findById(req.params.id);

    if(!task){
        res.status(404);
        throw new Error("Task Not Found");
    }
    
    if(task.user_id.toString() !== req.user.id )
    {
        res.status(403);
        throw new Error("User doesn't have permission to update other users' task")
    }

    if(task.completed)
    {
        res.status(403);
        throw new Error("Task is already completed")
    }
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });

    res.status(200).json(updatedTask);
});

export {createTask,updateTask,getTask,getTasks,deleteTask,completeTask}