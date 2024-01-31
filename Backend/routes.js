const express=require("express");
const {upload}=require("./Controller/uploads")
const router=express.Router()

const multer=require("multer");

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,"./public/uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname+`${Date.now()}`)
    }
})

const fileData=multer({storage:storage})



router.post("/",fileData.single("excel"),upload)

module.exports=router