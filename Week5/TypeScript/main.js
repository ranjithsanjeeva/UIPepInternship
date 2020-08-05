"use strict";
exports.__esModule = true;
var message = "hi";
console.log(message);
var isOk = true;
var age = 20;
var name = "King";
var sentance = "My name is " + name + "\nand I'm bigginer to TypeScript";
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["ranj", 3];
console.log(sentance);
function add(val1, val2) {
    return val1 + val2;
}
var numResult = add(10, 20);
//var strResult = add("The number is: ", "10"); it'll show error because we cant pass string to number
console.log(numResult);
