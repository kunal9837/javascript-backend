import dotenv from "dotenv"
import connectionDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectionDB();




// import  express  from "express";
// const app = express()

// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", ()=>{
//             console.log("error", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listen on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error(error)
//         throw error
//     }
// })()