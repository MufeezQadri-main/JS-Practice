// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());

// let myCreatedDate = new Date (2023 , 0 , 23)
let myCreatedDate = new Date (2023 , 0 , 23, 5, 89)
console.log(myCreatedDate.toLocaleTimeString());
  
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



