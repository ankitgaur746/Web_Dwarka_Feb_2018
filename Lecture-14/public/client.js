/**
 * Created by aayusharora on 4/15/18.
 */
$(document).ready(function(){

    let shoppingCards = $('#shopping-cards');
    var cardTemplate = function(identity, item, price){
        let card = `<div class="col-md-3">
                 <div class="card">
                     <div class="card-body">
                         <input id="${identity}" type="hidden">
                         <p onclick='update("${identity}","${price}","${item}")'>${item}</p>
                         <p>${price}</p>
                     </div>
                 </div>
             </div>`
        return card;
    };

    var generateTemplate = function(data){
        let layout = "";
        for(let i=0; i<data.length; i++){

            layout += cardTemplate(data[i].id, data[i].item, data[i].price);
        }
        shoppingCards.html("");
        shoppingCards.append(layout);
    };

    var networkCall = function(){
        $.get('/display', function(data){
            console.log(data);
            generateTemplate(data);

        })

    }

    var update = function( id, price, item){
        $(':input').attr('type', 'hidden');
        $('#'+id).attr('type', 'text');



        $('#'+id).click(function(event){
              console.log($(this).val());

        })


        $('#'+id).keydown(function(event){
            console.log(event.keyCode);
            if(event.keyCode == 13) {
                let item = $(this).val();
                $.post('/update', {id:id, item: item, price: 10}, function(data){

                    generateTemplate(data);

                })
            }


        })

        // $.post('/update', {id:id, item: item, price: price}, function(data){
        //
        //     generateTemplate(data);
        //
        // })

    };




    window.update = update;
    networkCall();

});
