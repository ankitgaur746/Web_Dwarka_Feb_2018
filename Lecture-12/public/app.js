/**
 * Created by aayusharora on 4/7/18.
 */
var global = {};
$(document).ready(function(){
    let inp = $('#inp');
    let btn = $('#btn');
    let result = $('#result');


    function addTask() {
        let task = inp.val();
        $.post('/add', {todo: task}, function(data){
            result.append(`<li> 
            <span>${data.task}</span> 
             <span>
               <button id=${data.id} onclick="update(this)">Update</button>
             </span></li>`);
        })

    }

    function updateTask(id, newVal){
        console.log(id, newVal);
        $.post('/update', {id:id, value: newVal}, function(data){

            $($(`#${id}`).parent().parent().children()[0]).text(newVal);
        })
    }


    btn.click(function(){
        addTask();
    });

   global.updateTask = updateTask;


});

function update(el){
    console.log(el.id);
    global.updateTask(el.id, "Hello");
}