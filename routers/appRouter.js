const express = require("express");
const appRouter = express.Router();

appRouter.get("/",(req,res)=>{
    res.send("hello world");
})

module.exports = appRouter;

