// We have two type of data types
// Interview Line- On the basis of kis tarah se data to memory mai rakha jata hain aur access kiya jata
// There are two type

// a: Primitive (Call by Value, it not take refrence, it copy the value)
// 7 categories: String, Number, Boolean, null(temprature is empty), undefined(variable decareled, memory space declared),Symbol, BigInt

const scrore = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null; //empty values

let userEmail; // default undefined if value not set

const id = Symbol("123")
const anotherID = Symbol("123");
//Both have different return values

console.log(id === anotherID);

const bigNumber = 345665454565n;

//b: Non Primitive - (Refrence)
// Array, Object, Functions

//Array
const heros = ["shaktiman", "naagraj", "dooga"];

//Object
let obj= {
    name: "Peter",
    ages: 26,
//it can contains, array, function , another object
}

const myfunction = function(){
console.log("Hello World");
}

console.log(typeof obj);


//Interview Question- how to check Type of DataType 
/*
* Premitive Datatypes

               Type                                typeof

i)            Number                               number
ii)           String                               string
iii)          Boolean                              boolean
iv)           Bigint                               bigint
v)            Symbol                               symbol
vi)           Null                                 object
vii)          Undefined                            undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                              object
ii)              Array                               object
iii)             Function                            function(object)

*/

/*Memory Management*/

//Stack(Primitive){Receive Copy data} ,Heap(Non Primitive){Received Reference Value, Change directly}

let myYouTubeName = "alexvideo";

let anotherName = "chaiaurcode";
// let anotherName = myYouTubeName;

console.log(myYouTubeName) 
console.log(anotherName) //it takes copy that's why it changed but not the first value

let userOne = {

    email:"userone@google.com",
    upi: "user@ybl"

}

let userTwo = userOne;

userTwo.email = "rithes@goole.com"

console.log(userOne.email);
console.log(userTwo.email);

