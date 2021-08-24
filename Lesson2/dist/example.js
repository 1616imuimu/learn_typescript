"use strict";
function taxed(amount) {
    return amount * 1.1;
}
function fee(amount) {
    return amount * 1.4;
}
function price(amount) {
    return fee(amount);
}
var demand = '¥' + taxed(price(1000));
console.log(demand);
