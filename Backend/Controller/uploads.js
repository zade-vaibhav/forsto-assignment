
const upload=async(req,res)=>{
    res.send(req.file)
}

module.exports={upload}