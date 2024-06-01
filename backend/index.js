const express = require("express");
const { createtodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());

app.post("/todo" , async function(req,res){
    const createpayload = req.body;
    const parsedpayload = createtodo.safeParse(createpayload);
if(!parsedpayload.success){
    
    res.status(411).json({
        msg : "you have give wrong credentials"
    })
    return;
}

await todo.create({
    title : createpayload.title,
    description : createpayload.description,
})

res.status(411).json({
    msg : 'Your todo has been created'
  })



})

app.get("/todos" , async function(req,res){
    

    const todos = await  todo.find({});

    res.json({
        todos
    })
})

app.put("/completed" , async function(req,res){
    const createpayload = req.body;
    const parsedpayload = createtodo.safeParse(createpayload);
if(!parsedpayload.success){
    
    res.json({
        msg : "you have give wrong credentials"
    })
    return;
}
  await todo.update({
     _id : createpayload.id,
  },{
    completed : true
  })

  res.json({
    msg :'your todo has been updated'
  })

})