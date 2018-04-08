/**
 * Created by aayusharora on 4/8/18.
 */

const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const operation = require('./operation');
const port = process.env.PORT || 5000;

let todoList = [];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

operation.displayfn.readFile(function(data){
    todoList.push(data.toString());
});

app.post('/add', function(req,res){
    operation.addfn.add(req.body.todo, todoList, function(data){
        res.send(req.body.todo);

    });

});



app.get('/display', function(req,res){
   operation.displayfn.readFile(function(data){
       console.log(data.toString());
       res.send(data);
   })

});


app.listen(port, function(){

   console.log("Server running on port 5000");
});