// /**
//  * Created by aayusharora on 4/14/18.
//  */
// // const connection = require('./database').connection;
//

function display(connection, cb){
    console.log("Display Item");
    let query = 'select * from shopping';
    connection.query(query, function(err, result){
      if(err) throw err;
      cb(result);

    })

}

function insert(connection,item,price, databaseCb){

    let query = 'INSERT INTO SHOPPING(item, price) VALUES (?,?)';
    connection.query(query,[item, price], function(err, results){
       if(err) throw err;
       databaseCb(results);

    })
}

function update(connection,id,item,price, databaseCb){

    let query = 'UPDATE SHOPPING SET item=?, price=?  WHERE id =?';
    connection.query(query,[item, price,id], function(err, results){
        if(err) throw err;
        databaseCb(results);

    })
}

function dlete(connection,id, databaseCb){

    let query = 'DELETE FROM SHOPPING where id =?';
    connection.query(query,[id], function(err, results){
        if(err) throw err;
        databaseCb(results);

    })
}

module.exports = {
    display,
    insert,
    update,
    dlete
};
