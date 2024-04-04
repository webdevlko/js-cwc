//Dates

//Date started calculated from 1 jan 1971 in biliseconds

let myDate = new Date();
console.log(myDate) // in miliseconds

//For different format of dates
console.log(myDate.toString()); //Thu Apr 04 2024 12:14:21 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Thu Apr 04 2024
console.log(myDate.toLocaleString()); //4/4/2024, 12:14:21 pm

// type of date -- Interview Question
console.log(typeof myDate)


//Declarig date
// let myCreatedDate = new Date(2024, 1, 23);
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2024, 3, 4, 13, 19);
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2024-01-14"); //YYYY-MM-DD format
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("04-04-2024");
// console.log(myCreatedDate.toLocaleString())


//When Quiz and polls fastest winner find out, we use timestamp
//Comparison always done in miliseconds
// let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());

//changes in seconds Interview Question

// console.log(Date.now()/1000); //changes in miliseconds
// console.log(Math.floor(Date.now()/1000)) //nearst minimum integer value;


//Methods of Date

let newDate =  new Date(); // Date is object
console.log(newDate);

console.log(newDate.getMonth()); //use .get after newDate you will get multiple options.
console.log(newDate.getDay());
console.log(newDate.getMonth()+1) //sometime we will get this code too


//String manupulation
console.log(`${newDate.getDate()} and the time is ${newDate.getTime()}}`)

//Custom Date format
console.log(newDate.toLocaleString('default',{
    weekday:"long",
    timeZone: " "
} ))








