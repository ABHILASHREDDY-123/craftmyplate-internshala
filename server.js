const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const appRouter = require("./routers/appRouter");

const app = express();
const PORT = process.env.PORT || 8000;


const MONGOURL = 'mongodb://localhost:27017/events';

mongoose.connect(MONGOURL)
.then(()=>{console.log("Database connected")})
.catch((err)=>{console.log(err);})


app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use("/",appRouter);

app.listen(PORT,()=>{
  console.log("Server is running");
})

