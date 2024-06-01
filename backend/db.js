const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017')

const todeschema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todeschema);

module.exports={
    todo 
}