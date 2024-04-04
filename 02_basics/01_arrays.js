//array


//ways to declare array
const myArr = [0,1,2,3,4,5]; //elements inside array    
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array (1,2,3,4,5)
// console.log(myArr2[0])

//Methods of array

myArr.push(6);          //Adding values in last
// console.log(myArr)


myArr.pop(6);          //removing values from last
// console.log(myArr)

// myArr.unshift(9);       //Adding values in start and it changes indexes of all elements
// myArr.shift(9);            //removing  values from start
// console.log(myArr)      



// console.log( myArr.includes(9));  //check values containing in array
// console.log(myArr.indexOf(9))    // index of elements, show negative if values not exist

//Add elements of array into a string

// const newArr = myArr.join();  //change array into string, comma sepearated

// console.log(myArr); 
// console.log(newArr);

// console.log(typeof myArr)
// console.log(typeof newArr)

//slice and splice

// a: slice

console.log("Slice Started")

console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);  //splice remove the part of 1,2,3
console.log("C",myArr);
console.log(myn2);

