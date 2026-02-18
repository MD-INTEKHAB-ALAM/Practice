import express from "express";
import productRouter from "./src/features/product/product.routes.js";

const app = express();

app.use("/product",productRouter);

app.get("/",(req,res)=> {
    res.send("Welcome to Express");
})

app.listen(4000,()=> {
    console.log("server is Running on port 4000");
})