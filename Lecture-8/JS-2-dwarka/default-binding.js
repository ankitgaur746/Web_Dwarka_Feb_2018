/**
 * Created by aayusharora on 3/17/18.
 */

function HelloWorld(y) {
   console.log(y);
}

function notWorld() {
    var x = this;
    console.log(x);


}

notWorld();