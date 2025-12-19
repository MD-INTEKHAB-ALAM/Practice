import express from "express";
import { connectToMongoDB } from "./config/mongodb.js";

const server = express();

server.get("/",(req,res) => {
    res.send("Welcome to Express");
})

server.listen(4000,()=> {
    console.log("Server is running on port 4000");
    connectToMongoDB();
})