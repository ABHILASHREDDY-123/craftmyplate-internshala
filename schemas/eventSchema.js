const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    menuItems:[{
        itemName:{
            type:String,
            required:true
        },
        quantity:{
           type:Number,
           required:true
        },
        specialRequiredments:{
            type:String
        }

    }],
    clientDetails:{
        clientName:{
            type:String,
            required:true
        },
        contactNumber:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    }
},
{
    timestamps:true
});
const Events = mongoose.model('events',eventSchema);
module.exports = Events;