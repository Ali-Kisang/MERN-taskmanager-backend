const { json } = require("express");
const Task = require("../models/taskModel");

//create a task
const createTask = async (req, res) =>{
    try {
       const task = await Task.create(req.body);
        res.status(200).json(task);  
    } catch (error) {
     res.status(500).json({msg:error.message});
        
    }
}

//Get/Read a tasks
const getTasks = async (req, res) =>{
    try {
        const task = await Task.find(req.body);
        res.status(200).json(task);  
    } catch (error) {
     res.status(500).json({msg:error.message});
        
    }
}

//Getting a single task
const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json(`No task with the id: ${id} found`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}

//Deleting a task
const deleteTask = async (req, res) => {
    try {
        const{id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).send(`No task with Id ${id}`);
        }
        res.status(200).send("Task Deleted successfuly");
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}

//Update a task
const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id:id}, req.body, {new:true, runValidators:true});
        res.status(200).json(task);
        if(!task){
            return res.status(404).json(`No Task found with Id :${id}`);
        }
        
    } catch (error) {
        res.status(500).json({msg:error.message});
    }

}

module.exports = {
    createTask, 
    getTasks,
     getTask,
     deleteTask,
     updateTask
}