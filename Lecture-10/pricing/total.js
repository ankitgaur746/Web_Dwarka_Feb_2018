/**
 * Created by aayusharora on 4/1/18.
 */
var kmM = require('./km');
var timeM = require('./time');

function totalPrice(km, time) {
    var kmPrice = kmM.kmPrice(km);
    console.log(kmPrice);
    var timePrice = timeM.timePrice(time);
    console.log(timePrice);
    return kmPrice + timePrice;

}

console.log(totalPrice(process.argv[2], process.argv[3]));