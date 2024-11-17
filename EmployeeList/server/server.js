import express from 'express';


const app=express()

//middleware
app.use(express.json())



//demoAPI
app.get("/",(req,res)=>res.send({message:"Server is start hii  "}))


//Listen
const PORT=process.env.PORT||4000
const hostname=process.env.HOST_ADD||"localhost"

app.listen(PORT,hostname,()=>{
  console.log(`server is running in http://${hostname}:${PORT}`);
})