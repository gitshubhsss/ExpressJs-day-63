const express=require("express");
const app=express();
const port =8080;
const path=require("path")
app.use(express.static("public"))
app.use(express.static(path.join(__dirname,"public/CSS")))
app.use(express.static(path.join(__dirname,"public/JS")))

app.listen(port,()=>{
    console.log(`server is listening on the port ${port}`);
});

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/instagram/:username",(req,res)=>{
    const {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    if(data){
        res.render("instagram.ejs",{data})
    }
    else{
        res.render("error.ejs")
    }
})