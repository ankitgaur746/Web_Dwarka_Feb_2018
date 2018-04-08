/**
 * Created by aayusharora on 4/8/18.
 */

$(document).ready(function () {
   let todoList;

    let inp = $('#inp');
    let btn = $('#btn');
    let result = $('#result');

    refresh();
    function addTask(){
        let value = inp.val();
        $.post('/add', {todo: value}, function(data){
            todoList.push(data);
            localStorage.setItem('todoList', JSON.stringify(todoList));
           result.append(`<li>${data}</li>`);
        })

    }

    btn.click(function(){
        addTask();

    });

    function refresh(){

        todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        if(todoList.length === 0 ) {
            $.get('/display', function(data){
                todoList = data.split(',');
                localStorage.setItem('todoList', JSON.stringify(todoList));
                display();
            })

        }
        else {
            display();
        }

    }

    function display(){
        todoList.forEach(function(item){
            result.append(`<li>${item}</li>`);


        })

    }
});

