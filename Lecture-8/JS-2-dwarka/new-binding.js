/**
 * Created by aayusharora on 3/17/18.
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}
//
// function Toy(name, price) {
//     Product.call(this, name, price);
//     this.category = 'toy';
// }

var cheese = new Food('feta', 5);
// var fun = new Toy('robot', 40);

console.log(cheese);