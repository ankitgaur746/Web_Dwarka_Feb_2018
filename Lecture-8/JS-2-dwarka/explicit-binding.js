/**
 * Created by aayusharora on 3/17/18.
 */

var a = {
    x: 2
}

var b = {
    x:3
}

function values () {
   console.log(this.x);

}

values.call(b);