const express = require("express");
const router = express.Router();
const { getTasks,
        createTask,
        getTask,
        deleteTask,
        updateTask
     } = require("../controllers/taskController");

router.get('/', (req, res)=>
res.send("Home page directory"))

//Create a Task and saving to the database
router.post("/api/tasks", createTask);
//Get task from database
router.get("/api/tasks", getTasks);

//Get a single task
router.get("/api/tasks/:id", getTask);

//delete a task 
router.delete("/api/tasks/:id", deleteTask);

//upate a Task
router.put("/api/tasks/:id", updateTask);



module.exports = router;