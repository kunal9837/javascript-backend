import mongoose from "mongoose";
import { Db_NAME } from "../constants.js";

const connectionDB = async ()=> {
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${Db_NAME}`) 
      console.log(`mongodb is connected successfully || host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("mongodb connection is failed", error)
        process.exit(1)
    }
}

export default connectionDB