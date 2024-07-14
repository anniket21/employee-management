import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routes/employeeRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const URL  = process.env.MONGOURL;

mongoose.connect(URL).then(() =>{

    console.log("DB Connected Successfully");

    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}).catch(error => console.log(error));

app.use("/api", route);

