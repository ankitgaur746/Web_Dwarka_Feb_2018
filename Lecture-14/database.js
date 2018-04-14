/**
 * Created by aayusharora on 4/14/18.
 */
const mysql = require('mysql');
let connection;
const operation = require('./operations');

let config = {
    host: 'localhost',
    user: 'aa',
    password: '1234',
    database: 'shoppinglist'
};

function conect(){
    connection = mysql.createConnection(config);
    connection.connect();
    console.log("Connection Success");
}

function display(cb){
    operation.display(connection, function(data){
        cb(data);
    });
}

function insert(item, price, serverCb){
    operation.insert(connection, item, price, function(data){
        serverCb(data);

    });

}

module.exports = {
    conect,
    display,
    insert
};