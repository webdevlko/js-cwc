const marvel_heros = ["thor", "spider","Ironman"];

const dc_heros = ["superman", "flash", "batman"]


//array can push array itself
// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


//merging to arrys with cancat
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros)

//merging array with spread operators
// const all_new_heors = [...marvel_heros, ...dc_heros]
// console.log(all_new_heors)


//If array have in multiple level, then we can arrage
const another_array = [1,2,3,[4,5],4,5,6,[8,9,5,[8,9]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
 

//checking data containter is array or not

console.log(Array.isArray("Ritesh"));
console.log(Array.from("Ritesh"));
console.log(Array.from({name:"Ritesh"})); //Intersting outcome will show | Interview question


//multiples string or array will move in one arrays
let scrore1 = 100;
let scrore2 = 200;
let scrore3 = 300;

console.log(Array.of(scrore1,scrore2,scrore3));



