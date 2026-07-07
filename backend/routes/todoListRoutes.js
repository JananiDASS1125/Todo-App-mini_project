const express=require("express");
const router=express.Router();
const{
    createTodoList,
    getTodoList,
    updateTodoList,
    deleteTodoList
}=require("../controllers/todoListController");
const protect=require("../middleware/authMiddleware");
//Create List
router.post("/",protect,createTodoList);
//Get all lists
router.get("/",protect,getTodoList);
//Update list
router.put("/",protect,updateTodoList);
//Delete list
router.delete("/:id".protect,deleteTodoList);

module.exports=router;