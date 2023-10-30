const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})


const todoModel = new mongoose.model("ToDo", todoSchema)

module.exports = todoModel