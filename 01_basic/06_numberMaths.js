const score = 400;

const balance = new Number(100000) //especially defining number
console.log(balance);
console.log(score);

//changing number into string via prebuilt methods

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //for GST calculations

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); //precision use sometime decimal first and last

const hundred = 100000;
console.log(hundred.toLocaleString("en-IN"));


/*******************MATHS******************/ 

console.log(Math);
console.log(Math.abs(-4)); //only negative will change in postive
console.log(Math.round(4.6))
console.log(Math.ceil(4.2)); //upper value
console.log(Math.floor(4.9)); //lower values
console.log(Math.min(4,3,9,1,95,6));  //search minimum values


console.log(Math.random()); //it values comes between 0 to 1
console.log(Math.random()*10+1); //if this type number 0.04 or similar condition, to avoid 0 in result

console.log(Math.floor(Math.random()*10)+1);  //floor to move lowest number in integer 


//How to get random number between a range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min  + 1)) + min);

console.log(Math.floor(Math.random() * (max - min  + 1)) +min)







