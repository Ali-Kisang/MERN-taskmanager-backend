
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const taskRoutes = require("./routes/taskRoutes");
const connectionString = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
const cors = require("cors");



//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended :false}));
app.use(cors({
    origin:["http://127.0.0.1:5173/"]
}))
app.use( taskRoutes);

//Connceting to MongoDb Databases and Listening to the port
mongoose
.connect(connectionString)
.then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server listening to port ${PORT}`)
    })
})
.catch((err)=>console.log(err))

/* const createServer = async () =>{
    try {
        await connectDB();
    } catch (error) {
        console.log(error.message);
    }
}
createServer(); */

