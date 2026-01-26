const mc_heros = ["Spiderman", "ironman", "captain america", "hulk"]
const dc_Heros = ["superman", "batman", "flash", "wolfarine"]

// mc_heros.push(dc_Heros)
// console.log(mc_heros[4][0]);

//const allHeros = mc_heros.concat(dc_Heros)
//console.log(allHeros);

const allHeros = [...mc_heros, ...dc_Heros]

//console.log(allHeros);

const newArr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10], 11], 12]
console.log(newArr);

console.log(newArr.flat(Infinity));

console.log(Array.isArray("mufeez"));
console.log(Array.from("mufeez"));
console.log(Array.from ({name: "Mufeez"}));


let s1= 900;
let s2= 800;
let s3= 700;
console.log(Array.from([s1, s2]));
