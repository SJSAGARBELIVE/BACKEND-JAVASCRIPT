import mongoose from "mongoose";
import connectDB from "./db";
import { DB_name } from "./constants";
import dotenv from "dotenv"


dotenv.config({
  path: "./env"
})

/*
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