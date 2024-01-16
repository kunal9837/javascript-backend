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
import dotenv from "dotenv"
import connectionDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './env'
})

connectionDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGODB connection is failed", error)
})

