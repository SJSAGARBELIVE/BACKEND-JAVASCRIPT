import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";


dotenv.config({
  path: "./env"
})
connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000 ,()=>
  console.log(`Backend started at ${process.env.PORT}`)
);
})
.catch((error)=>{
  console.log("MONGO sb connection failes !!! ", error);
  
})

















/*
import mongoose from "mongoose";
import { DB_name } from "./constants";

import express from "express";
 const app = express()
 ;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
    app.on("error",(error)=>{
        console.log("ERR:",error);
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listenong on port ${process.env.PORT}`);
        
    })
  } catch (error) {
    console.log("Index.js :", error);
    throw error;
  }
})();
*/