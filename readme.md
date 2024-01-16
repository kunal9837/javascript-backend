constants.js

*export const DB_name ="youtube"

db/index.js 

import mongoose from "mongoose"
import {DB_name} form ---

const connectDB = async () => {
    try{
       const connectionInstance await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`)
        console.log("connection is connected || host ${connectionInstance.process.host}")
    }
    catch(error)
    {
        console.log("DB connection failed", error)
        process.exit(1)
    }
}

export default connectDB

index.js

import dotenv form "dotenv"
import connectionDb form ----

dotenv.config({
    path: "./env"
})

connectionDb();