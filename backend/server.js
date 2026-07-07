const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const connectDB = require ("./config/db");
const userRoutes=require("./routes/userRoutes");
const todoListRoutes=require("./routes/todoListRoutes");
dotenv.config();

connectDB();
const app=express();
app.use(cors());
app.use(express.json());


app.get("/" ,(req,res)=>{
    res.send("API Running");
})
app.use("/api/users".userRoutes);
app.use("/api/users".todoListRoutes);

app.use((req,res)=>{
    res.status(404).json({
        message:"Route Not Found",
    });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is running");
});

