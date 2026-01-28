const user = {
    username : " mufeez",
    price: 999,
    
    welcomeMessage: function (){
        console.log (`${this.username}, welcome to website`);
        //console.log(this);
    
    }
}
//user.welcomeMessage()
//user.username = " Mufeeez "
//user.welcomeMessage()

//console.log(this);

// const one = () => {
//     let username = " mufez"
//     console.log(this);
// }
// one()

const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(3,4))


const obj = (num1,num2) =>({username: "mufeez"})
console.log(obj (3,4))