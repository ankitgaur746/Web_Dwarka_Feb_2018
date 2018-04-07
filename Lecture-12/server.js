/**
 * Created by aayusharora on 4/7/18.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = process.env.PORT || 5000;

app.use(express.static('public'));

let todoList = [];
let id= 0;

app.post('/add', function(req, res){
    todoList.push(req.body.todo);
    res.send({task: req.body.todo, id: id++});

});

app.post('/update', function(req,res){
    todoList[req.body.id] = req.body.value;
    console.log(todoList);
    res.send("Update Task");
});
app.get('/delete', function(req,res){
    if(todoList.length > 0) {
        todoList.splice(req.query.id,1);
    }
    else {
        console.log("No element left to be deleted");
    }
    console.log(todoList);
    res.send("Deleted Task");
});

app.get('/display', function(req,res){
    res.send(todoList)
});

app.listen(port, function(){
    console.log("Server is running");
});
