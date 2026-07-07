const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
dotenv.config();
const connectDB = require ("./config/db");
const app=express();
connectDB();
app.use(cors());
app.use(express.json());
const userRoutes=require("./routes/userRoutes");
const todoListRoutes=require("./routes/todoListRoutes");
app.use("/api/users".userRoutes);

app.get("/" ,(req,res)=>{
    res.send("API Running");
})
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is running");
});


