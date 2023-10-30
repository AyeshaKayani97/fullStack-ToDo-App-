const todoModel = require("../models/todomodels")

const todoController = async (req, res)=>{
    try {
        const todos = await todoModel.find(); // Assuming find() returns a promise
        console.log(todos)
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json("An error occurred.");
    }
}
const createTodoController = async (req, res)=>{
    const {text} = req.body
    try {
        const createtodo = await todoModel.create({text}); // Assuming find() returns a promise
        console.log("Added successfully")

        console.log(createtodo)
        res.json(createtodo);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred.");
    }
}
const updateTodoController = async (req, res) =>{
    try{
        const {_id, text} = req.body
        const updatedData = await todoModel.findByIdAndUpdate(_id,{text} )
        console.log(updatedData)
        res.status(200).json({"success":"updated successfully"})

    }catch(error){
        console.log(error)
        res.status(500).send("An error occurred.");
    }
}
const deleteTodoController = async (req, res) =>{
    try{
        const {_id} = req.body
        const  deletedData = await todoModel.findByIdAndDelete(_id)
        console.log(deletedData)
        res.status(200).json({"error":"deleted successfully"})

    }catch(error){
        console.log(error)
        res.status(500).send("An error occurred.");
    }
}

module.exports = {todoController,createTodoController, updateTodoController, deleteTodoController }
