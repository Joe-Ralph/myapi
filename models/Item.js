const mongoose = require('mongoose');


const Items =  mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    description:{
        type: String,
        required: false,
        default: ' '
    },
    volume:{
        type: String,
        required: false,
        default: 0
    },
    date:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Item",Items);






