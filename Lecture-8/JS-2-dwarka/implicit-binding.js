/**
 * Created by aayusharora on 3/17/18.
 */

var x = {
    fruit: ["apple", "orange"],
    getfruit: function() {
       console.log(this.fruit[0]);
    }
};


console.log(x.getfruit());

