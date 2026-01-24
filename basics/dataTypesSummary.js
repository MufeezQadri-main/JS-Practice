/*
primitive dataTypes
7 types : string, number, boolean, null, undefined, Symbol,  BigInt



referenceTypes (nonPRimitiveDtatypes)
Arrays, Objects, Functions
*/
// primitiveDatatypes
let string1= "Mufeez"; //isString.
let number1 = 22; //isNumber
let isLoggedIn =(true);// isBoolean
let temp = null; //null
let temp2 = undefined; //undefined
const id = Symbol('123')
const id2 = ("123") // symbol
const bigNumber = 329079322039987328989238n //BigInt
 
console.log(typeof string1, string1, typeof number1, number1, typeof isLoggedIn, isLoggedIn, typeof temp, temp, typeof temp2, typeof id, id, typeof id2, id2, typeof bigNumber, bigNumber); 


const heros = ["spiderman", "Shaktimaan "," Supermann"]
let myObj = {
    name: " Mufeez",
    age: 23,
}


const myfunction = function() {
 let greeting = "hello World";
 return greeting;
}
console.log(myfunction());
console.log(myObj.age);
console.log(heros);

