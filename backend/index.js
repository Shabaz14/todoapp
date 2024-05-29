const express = require("express");
const { createtodo } = require("./types");

const app = express();

app.use(express.json());

app.post("/todo" , function(req,res){
    const createpayload = req.body;
    const parsedpayload = createtodo.safeParse(createpayload);
if(!parsedpayload.success){
    
    res.status(411).json({
        msg : "you have give wrong credentials"
    })
    return;
}

})

app.get("/todos" , function(req,res){
    
})

app.put("/completed" , function(req,res){
    const createpayload = req.body;
    const parsedpayload = createtodo.safeParse(createpayload);
if(!parsedpayload.success){
    
    res.status(411).json({
        msg : "you have give wrong credentials"
    })
    return;
}
})