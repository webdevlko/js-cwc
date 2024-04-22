//Immediately Invoke function

// Normal Function
// function chai(){
//     console.log(`DB Connected`)
// }
// chai()

// IIFE 

(function chai(){
    console.log(`DB Connected`)
}) ();

//always put ; after iifee functions especially when two are togethers


// (definition of fucnction -1 paranthesis ) (Calling a function)

// Inverview Question
// 1- Sometime global scope variable or any type declaration create polution in order to avoid this we use IIFE 
// 2- It is  immididate invoke after declaring function


(function(){
    console.log("IIfe in arrow function two ")
})();

(()=>{
    console.log("IIfe in arrow function ")
})();



// With Parameter in arrow function 
((name)=>{
    console.log(`DB connected ${name}`)
})("sachin")