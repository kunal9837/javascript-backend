import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInheri = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`mongob is connected successfully || host ${connectionInheri.connection.host}`)
    } catch (error) {
        console.log("mongodb connection is failed", error)
    }
}

export default connectDB
