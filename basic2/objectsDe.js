const whatsapp = {
    name: "Mufeez",
    email: "mufeezqadri@gmail.com",
    isLoggedIn: true,
    fullname: {
        firstName: "Mufeez",
        lastName: "Qadri",
        personage: {
            age: 24
        }
    }
}
//console.log(whatsapp.fullname.personage);
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 3: "d" }
const obj3 = Object.assign({}, obj1, obj2)
const obj4 = { ...obj1, ...obj2 }
//console.log(obj3, obj4)


const users = [
    {
        id: 1,
        email: "mn@hotmail.com"
    },
    {
        age: 24,
        email: "67"

    }
]
//console.log(users[1].email)

//console.log(Object.keys(whatsapp))
//console.log(Object.values(whatsapp))
//console.log(Object.entries(whatsapp.fullname))
//console.log(whatsapp.hasOwnProperty("isLoggedIn"))

const course = {
    courseName: "Medical",
    price: 999,
    courseInst: "Mufeez"
}
console.log(course.courseInst)
const { courseInst: Instructor } = course
console.log(Instructor)

//JSON 
{
    "name": "mufeez",
        "fullname" : "json format"
}
