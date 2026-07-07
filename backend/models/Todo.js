const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema(
    {
       title:{
        type:String,
        required:true,
       },
       description:{
        type:String,
        default:"",
       },
       completed:{
        type:Boolean,
        default:"",
       },
       tag:{
        type:String,
        default:"",
       },
       listId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"TodoList",
        required:true,
       },

    },
    {
        timestamps:true,
    }
);
module.exports=mongoose.model("Todo",todoSchema);