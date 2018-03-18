/**
 * Created by aayusharora on 3/17/18.
 */
var todoList = [];
window.onload = function() {

    var btn = document.getElementById('add');
    var inp = document.getElementById('inp');
    var list = document.getElementById('list');

    function add() {
        var item = inp.value;
        todoList.push(item);
    }

    btn.onclick = function () {
        add();
        display();
        console.log(todoList);
    }

    function display() {
        var list_items = "";
        for(var i=0; i<todoList.length; i++) {
            list_items += `<li>${todoList[i]}
                           <button id=${i} onclick="del(this)">delete</button>
                            </li>`
        }

        list.innerHTML = list_items;
    }
    window.display = display;
}

function del(el) {
    todoList.splice(el.id,1);
    display();
    console.log(el.id);
}