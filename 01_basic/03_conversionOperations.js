//Please uncomment the score one by one and see the changes

// let score = "33";
let score = "33ab"
// let score = null

console.log(typeof score);
console.log(typeof(score));

//Changing the format of the Data Type | number in capital due to class base, Capital ask to change the type 
let valueInNumber = Number(score); 


//Printing the values to check
console.log(typeof(valueInNumber)); //values changes in each case
console.log(valueInNumber); //values changes in each case

//"33"=> 33 
//"33abc" => NaN, type is number only
//true => 1 ; false => 0


// Conversion in Boolean

//Please uncomment the score one by one and see the changes
// let isLoggedIn = 1;
// let isLoggedIn = 0;
// let isLoggedIn = "";
let isLoggedIn = "alex"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// Result
//1 => true; 0 =>false;
//"" => false;
//"alex" => true;



// Conversion in String
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);