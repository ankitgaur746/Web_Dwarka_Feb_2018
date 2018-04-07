/**
 * Created by aayusharora on 4/1/18.
 */
function kmPrice(km) {
   var price = km<=5?(km*10):((km>5 && km<=10)? (km-5)*20+5*10:(km>10)?5*10+10*20+ (km-15)*30:undefined)
   return price;
}


module.exports = {
    kmPrice
};