/**
 * Created by aayusharora on 4/8/18.
 */

const fs = require('fs');

function add(task, todoList, callback){
    // Add task into Todolist
    setTimeout(function(){
        todoList.push(task);
        writeFile(todoList);
        callback("Success");
    },0);


}

function writeFile(todoList){
  // To write TodoList into File
  fs.writeFile('./abc', todoList, function(err){
     if (err) throw err;
  })
}

module.exports = {
    add
};