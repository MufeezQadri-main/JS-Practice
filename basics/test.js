console.log("Mufeez")
function abc() {
    console.log("amazing")
}
const arr = [1, 2, 3, 4, abc, 6, 7, 8];

const obj = {
    f: abc,
    rollNo: 2
};
console.log(obj.rollNo);
obj.f();