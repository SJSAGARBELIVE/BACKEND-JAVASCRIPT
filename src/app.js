import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//CORS this file Use for Only to Connect frontend with Backend 
// so MY frontened can only connect it
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//Express methods are done by use 
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


console.log(cookieParser);



// routes import
import userRouter from './routes/user.routes.js';

//rotes declaration
app.use("/api/v1/users",userRouter)



export { app };
