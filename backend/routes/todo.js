const express = require("express");
const router = express.Router()
const { todoController, createTodoController,updateTodoController,deleteTodoController }  = require("../controller/todoList")


 router.get("/",todoController )
 router.post("/create",createTodoController)
router.post("/update", updateTodoController);
router.post("/delete",  deleteTodoController
  )



    

 
 module.exports = router