const express=require("express")

const app=express();

const port=8090;


app.get("/",(req,res)=>{
    return res.send("Home Page");
})

const admin =(req, res) =>{
    return res.send("this is admin dashboard");
};

const isAdmin = (req, res, next) =>{
    console.log("isAdmin is running");
    next();
};

//app.get("/", admin);
const isloggedIn= (req, res, next) =>{
    console.log("you are logged in");
    next();
};

app.get("/admin",isloggedIn, isAdmin, admin);

app.get("/login",(req,res)=>{
    return res.send("Hello world");
})


 app.listen(port,()=>{
     console.log("server is up and running....");
})

app.get("/signup",(req,res)=>{
    return res.send("You are visiting signup route");
})

/*const port=8020;

app.get("/",(req,res)=>{
    return res.send("Hello Everyone");
})

app.get("/signout",(req,res)=>{
    return res.send("you are signout");
})
app.get("/hiteshsir",(req,res)=>{
    return res.send("hiteshsir users instagram");
})

app.listen(port,()=>{
    console.log("server is runningout...")
})*/