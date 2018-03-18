/**
 * Created by aayusharora on 3/17/18.
 */
var x = [1,2,3, {

    b: function(){

     console.log(this);
    }
}];

console.log(x[3].b());
