/**
 * Created by aayusharora on 4/15/18.
 */

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const app = express();
const dbname = "shoppingcart";

let shopping;

function Connect(){

    MongoClient.connect(url, function(err, client){
        console.log("MongoDb is connected");
        const db = client.db(dbname);
        shopping = db.collection('shopping');

    });


}

app.get('/display', function(req,res){
   insertItem(function(data){
      findItem();
      res.send(data);


   })
});

function findItem(){

     shopping.find({Mobile: 5000}).toArray(function(err, docs){
        console.log(docs);

     })

}


function insertItem(callback) {

   shopping.insertMany([
       {'Mobile': 5000},
       {'WashingMachine': 1000},
       {'Soap':{
          'smell': 'jasmine',
           'price': 20
       }}],
       function(err, result){
         callback(result);

       }
   )

}


app.listen(5000, function(){
   Connect();
   console.log("Server is listening");

});