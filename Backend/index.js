const express=require("express");
const mongoose=require("mongoose")
require("dotenv").config();
const router=require("./routes")

const port=process.env.PORT
const app=express();

mongoose.connect("mongodb://127.0.0.1:27017/studentsData").then(()=>{
     console.log("backend is conected")
}).catch((err)=>{
   console.log(err)
})

app.use(express.json())

app.use("/api",router)

app.listen(port,()=>{
    console.log(`backend is running on port : ${port}`)
})