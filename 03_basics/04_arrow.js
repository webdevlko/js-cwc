const user = {
    username: "sachin",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website `)   //this create current context

        console.log(this)
    }
}

// user.welcomeMsg()
// user.username = "sam";              //this is content
// user.welcomeMsg()

// console.log(this)

// Interview Question in browser "this" global object is windows objects

//Node "This" contains below properties
// function chai(){
//     console.log(this);
// }

// chai();


// In FUNCTION  "this" not work
// function chai(){
//     let username = "Sachin"
//     console.log(this.username);
// }

// chai();

//Arrow function
const chai = ()=>{
    let username = "sachin";
    console.log(this)
}

// chai();

// //Arrow function normal way- expecitly
// const addTwo = (num1, num2)=>{
//     return num1+num2;
// }

// console.log(addTwo(3,9))
//Implicit return

// way-a
// const addTwo = (num1, num2) =>  num1+num2;


// way-b- this way of writing arrow function will use in React
// const addTwo = (num1, num2) =>  (num1+num2);

// console.log(addTwo(3,9))

//Note if wrap in curly braces{ } then need to write return keyword and if we use in paranthesis ( ) then we need to write in return keyword in arrow fucntion 

// const addTwo = (num1, num2) =>  (num1+num2);

// When returing object in arrow function
const addTwo = (num1, num2) => ({username: "sachin"})
console.log(addTwo(3,9))