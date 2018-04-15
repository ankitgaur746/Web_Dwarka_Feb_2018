/**
 * Created by aayusharora on 4/14/18.
 */

const server = require('express');
const app = server();
const database = require('./database');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(server.static('public'));

app.get('/display', function(req,res){
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


app.post('/update', function(req,res){
    let id=req.body.id;
   let item = req.body.item;
    let price = req.body.price;
    database.update(id,item, price, function(data){
        database.display(function(data){
            res.send(data);

        })
    })

});


app.post('/delete', function(req,res){
    let id = req.body.id;
    database.dlete(id, function(data){
        res.send(data);
    })

});
app.listen(5000,function(){
   database.conect();


});