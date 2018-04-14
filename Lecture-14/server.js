/**
 * Created by aayusharora on 4/14/18.
 */

const server = require('express');
const app = server();
const database = require('./database');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res){
   database.display(function(data){
      res.send(data);

   });
});

app.post('/insert', function(req,res){
   let item = req.body.item;
   let price = req.body.price;
   database.insert(item, price, function(data){
      res.send(data);
   })

});

app.listen(5000,function(){
   database.conect();


});