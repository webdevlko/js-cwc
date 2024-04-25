//When we assume that value are true then truthy , when false is  falsy 

const userEmail = "ritesh@google.com";

//if value contains in varible then it is true and false when it is empty

if (userEmail){
    console.log("Got User email");
}
else{
    console.log("Don't have user email")
}

//Fasly values
// false, 0, -0, BigInt 0n, "", null, NaN;

// Truthy values
// "0" = string(true) , 'false', " ", [], {}, function(){} 

//checking array is empty

// if(userEmail.length ===0){
//     console.log("Array is empty")
// }


//checking empty object

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empy")
};

//Interview question:
// false = 0; gives true
// false == "" gives true
// 0 == "" gives true


//Nullish Coalescing Operator (??): null undefined
//It use when error while receving the values from other side, how to handle and assing values on it

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 15 ?? 20;
val1 = null ?? 10 ?? 20; 

console.log(val1);


//Terniory Operator

// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Yes it is low") : console.log("it is high")