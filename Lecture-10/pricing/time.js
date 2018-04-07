/**
 * Created by aayusharora on 4/1/18.
 */
function timePrice(time) {
    var price = time<=15?0:(time>15 && time<=30)? (time-15)*5:(time>30)?15*5+ (time-30)*7:undefined;
    return price;

}


module.exports = {
    timePrice
};