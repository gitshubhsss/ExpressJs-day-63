const express=require("express");

const app=express();
const port=8080;


app.listen(port,()=>{
    console.log(`server is listeninging on ${port}`);
})
app.set("view engine", "ejs");
const path=require("path")
// app.set("views", path.join(__dirname,"/views")); to access the views from the parent directory

app.get("/ig/:username",(req,res)=>{
    const {username}=req.params;
    res.render("username.ejs",{username})
})

