// singleton
// object literals
//two types but object literals
const myObj = Symbol ("key1");
const objects1 ={
    name: "mufeez",
    "fullname": "mufeez qadri",
    age: 24,
    [myObj]: "mufz",
    email: "mufeez@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]  
}
//console.log(objects1.email)
//console.log(objects1["fullname"])
//console.log(objects1)
//objects1.age = ("89")
//console.log(objects1)

objects1.greetings = function (){
console.log("hello")
}
objects1.greetingsTwo = function () {
    console.log(`Hello , ${this.name}`);
}
console.log(objects1.greetings());
console.log(objects1.greetingsTwo());