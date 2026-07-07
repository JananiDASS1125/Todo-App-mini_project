const TodoList=require("./models/TodoList");
//create todo list
const createTodoList=async(req,res)=>{
    try{
        const {title}=req.body;
        const todoList=await TodoList.create({
            title,
            userId:req.user.id,
        });
        res.status(201).json(todoList);

    }
    catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}
//get all todo list
const getTodoList=async(req,res)=>{
    try{
        const todoList=await TodoList.find({
            userId:req.user.id,
    });
        res.json(todoLists);
    }
    catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};
//update all todo list
const updateTodoList=async(req,res)=>{
    try{
        const todoList=await TodoList.findByIdAndUpdate(
            req.param.id,
            req.body,
            {new:true}
        );
        res.json(todoList);
    }
    catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};
//Delete the todo list
const deleteTodoList=async(req,res)=>{
    try{
        const todoList=await TodoList.findByIdAndDelete(
            req.param.id,
        );
        res.json({
            message:"Todo List Deleted Successfully"
        });
    }
    catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};
module.exports={
    createTodoList,
    getTodoList,
    updateTodoList,
    deleteTodoList,


};
