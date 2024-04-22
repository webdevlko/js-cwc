//Global Scope
// const b = 20;
var c = 300;
let a = 600;


//Block Scope--inner variable name not to be leak
if(true){
    let a = 10;
    const b = 20;
    var c = 30; //this is on global scope
    console.log("Innter:", a);
    //multiple scopes
    // function addNum(){
    // }
}

// console.log(a)
// console.log(b)
// console.log(c)


//Interview question: console.log global scope in browser is differnt and node global scope is different

// Video Scope level and mini hoisting in javascript 
//Function insdie function
function one(){
    const username = "kapil";

    function two(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);            //this is will give refrence error due to  scope of website variable

    // two()
}

// one()

//Condition 
if(true){
    const username = "kapil";
    if (username === "kapil"){
        const website = " youtube";
        console.log(username+website);
    }

    // console.log(website);            //try-1
}

console.log(username);               //try-2



// Two ways to declaring the function and executing

// Way-1  exectuing before declaring
console.log(addOne(5))
function addOne(num){
    return num + 1;
}

// addOne(5);              //only return not print

//Way-2 Can't Executing before 
const addTwo = function (num){
    return num+2;
}

addTwo(5);



