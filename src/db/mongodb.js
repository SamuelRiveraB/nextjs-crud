import mongoose from "mongoose"

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected")
    } catch(e) {
        console.log(e);
    }
}

export default dbConnection;

/*const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();
console.log(process.env.MONGODB_URI)
try {
    mongoose.connect(process.env.MONGODB_URI, {userNewUrlParser: true})
    console.log("Connected")
} catch(e) {
    console.log(e);
}*/