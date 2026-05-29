import express from "express";
import connectDb from "./lib/mongoose.js";
const server = express();

server.get("/",(req,res)=> {
    res.send("Welcome to Mongoose");
})

server.listen(3001,()=> {
    connectDb();
    console.log('Server is Running on port 3001');
})