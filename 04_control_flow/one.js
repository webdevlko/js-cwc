const isUserloggedIn = true;
const temperatue = 41;

// if(temperatue < 50){                   //If condition is true then only we process futher lines.
//     console.log("less than 50 degree")
// }

// else{
//     console.log("less than 60 degree")
// }

// console.log("outside executed")


//Scope of if{}, if we declare var then it will call outsite the scope too

// const score = 200;

// if (score>100){
//     const power = "fly";
//     console.log(`User power : ${power}`);
 
// }

// console.log(`User power : ${power}`);

//Short hand notation

// const balance = 1000;
// if (balance > 500) console.log('test'), console.log('test2') // avoid (comma)


//check multiple condition

// if (balance < 500){
//      console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }


//Purchasing on ecommerce condition check

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;
const guestUser = true;

if(userLoggedIn && debitCard){
    console.log("allow user to buy course")
}

//login checking conditions either one of them
 if(loggedInFromGmail || loggedInFromEmail || guestUser){
    console.log("User logged in")
 }

 