const name = "ritesh";
const repoCount = 50;

// console.log(name + repoCount +" Value"); // old to add strings

// We backrticks, it is modern way

console.log(`Hello my name is ${name} and repo count is ${repoCount}`)

const gameName = new String ("waraqagame")

//accessing object properties

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

//Accessing methods and function
console.log(gameName.toUpperCase());


//use case for remove extra space in credentils and other form
const newStringOne = " rithesh   ";
console.log(newStringOne);
console.log(newStringOne.trim);

//if we add space in URL then it will change in %, this issue can be avoid by below method
const url = "www.riteshchoudhry.com/hitesh%20chourdhary";

console.log(url.replace('%20', '-'));
 
//contains a name in string
console.log(url.includes('sundar'));

//split the string
console.log(url.split('%'));




