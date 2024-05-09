//for of

//Array
// [ "","",""]

//Objects in array
// [{}, {}, {}, {}]

const arr = [1,2,3,4,5];

//for of --putting for loop on arr array
for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World";
for (const greet of greetings) {
    console.log(`Each Charchter of ${greet}`)
}

// MAP -- Only contains unique values and keep  

const map = new Map();
map.set('IN', "India")
map.set('USA', "united states of America")
map.set("FR", "France")
map.set('IN', "India")

// console.log(map)

//way-1 to all in array form
for(const key of map){
    console.log(key);
}

//Way-2 destructuring

for (const [key,value] of map){
    console.log(key,':-', value);
}

// for of on object

const myObject = {
    'game': 'NFS',
    'game1' : 'Spiderman'
}

for (const [key,value] of myObject){
    console.log(key,':-', value);
}