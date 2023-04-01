import express from 'express'
import mongoose from 'mongoose'
import cors from "cors"
import morgan from "morgan"
import userRouter from "./routes/user.js"

// admin admin  

const app = express()

app.use(morgan("dev"))
app.use(express.json({limit:"50mb",extended:true}))
app.use(express.urlencoded({limit:"50mb",extended:true}))
app.use(cors())

app.use("/users",userRouter); //localhost:5000/user/signup
const MONGODB_URL = "mongodb+srv://admin:admin@cluster0.nokcmop.mongodb.net/opportunityoasis?retryWrites=true&w=majority"
const port = 5000


mongoose.connect(MONGODB_URL).then(()=>{
    app.listen(port, () =>{
console.log('server running')
    })
}).catch((error)=>console.log(`${error} did not connect`))
