//Ways to declare object
// 1-literal  >= not create singleton, it create multiple instances
// 2-constructor >= Object built With constructor are singleton object

//In object we can define key and values but in array we cann't assign key value.

//singleton
//Object.create by this method it will work
//object literals


//Declaring symbol

const mySym = Symbol("key1");
console.log(mySym);

// Ways to declare object
// Method- 1 
const JsUser = {
    name:"ritesh",
    "fullName" : "Ritesh Choudhry",
    age: 18,
    location : "Jaipur",
    email: "ritesh@gmail.com",
    [mySym]: "key99", //This will treat like symbol not string
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]
};

//access values of object

console.log(JsUser.email);    //dot notation method
console.log(JsUser["email"]); //square notation method, try to use
console.log(JsUser["full name"]);  // accessing save 
console.log(JsUser[mySym]); // accessing number
console.log(typeof[mySym]); // type of number

//Change object values

JsUser.email = "ritesh@chatgpt.com"

console.log(JsUser.email)

// if object value want to freeze
Object.freeze(JsUser);
JsUser.email = "ritehsh@micromax.com";
console.log(JsUser)  //object value symbol will show and interiviwer question answer and freeze value not change

//Function are treated a variable
JsUser.greeting = function(){
    console.log("Hello World User")
}

console.log(JsUser.greeting);  // if want to check variable is function or not


JsUser.greetingTwo = function(){
    console.log(`Hello JS UserJS ${this.name}`)   //mixing values and numbers
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());