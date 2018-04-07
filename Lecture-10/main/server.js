/**
 * Created by aayusharora on 4/1/18.
 */

const express = require('express');
const app = express();


app.use('/',express.static('public'));


app.get('/student', function(req,res){
    res.send("Student is absent");

});

app.get('/teacher', function(req,res){
    res.send("teacher")

});

app.listen(5000, function(){
    console.log("Listening at 5000");
})