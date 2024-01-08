const express = require("express");
const appRouter = express.Router();
const Events = require("../schemas/eventSchema");

// Get Event

appRouter
.get("/",async (req,res)=>{
    const obj = await Events.find();
    res.send({"events":obj});
})
.get("/:id",async (req,res)=>{
    const id = req.params.id;
    const obj = await Events.findById(id)
    res.send(obj);
})


// Create Event

appRouter
.post("/",async (req,res)=>{
    const obj = new Events({...req.body,date:new Date(req.body.date)});
    const resp = await obj.save();
    res.send(resp);
})

// Update Event

appRouter
.put("/:id",async (req,res)=>{
    const id = req.params.id;
    let obj = await Events.findById(id);
    if(obj){
        obj = new Events({...obj,...req.body})
        const updated = await obj.save();
        res.send({message:"Event Updated",event:updated});
    }
    else {
        res.send({error:"This event doesn't exists!!"})
    }
})


// Delete Event 

appRouter.delete("/:id",async (req,res)=>{
    const id = req.params.id;
    const message = await Events.deleteOne({_id:id});
    if(message.acknowledged){
        res.send({message:"Deleted Event Successfully!!"});
    }
    else {
        res.send({message:"Error in deleting event.."})
    }
})
 



module.exports = appRouter;

