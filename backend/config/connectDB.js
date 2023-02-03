const mongoose = require("mongoose");

const connectDB = async() =>{
    try {
        
    await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongoose connected `);
    }
 catch (error) {
    console.log(error);
    process.exit(1);
}
}

mongoose.set('strictQuery', false);
module.exports = connectDB;