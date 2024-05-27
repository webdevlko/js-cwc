let myName = "Goel"
let myCity = "LKO"

console.log(myName.trueLength);

//Library making process
//if we want to set default method of trim while writing string

let myHero = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman : "sling",
    
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

//this will add error becasue power given to object and all things comes form object spread
Object.prototype.ritesh = function(){
    console.log(`Ritesh is present in all objects`);
}

Array.prototype.heyRitesh = function(){
    console.log(`Hello message`);
}

// heroPower.ritesh()

myHero.ritesh();

// heroPower.heyRitesh() //this will give error becasue below to up, power not spread


//Pointer --Inheritance  => Old Way of learning

const User = {
    name: "chai",
    email: "slam@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssingment: "JS assingment",
    fullTime: true,
    __proto__:TeachingSupport       //borrwing propoerties of teachingSupport
}

Teacher.__proto__ =  User;          //Teacher borrowing User


//Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher) //same transfering power like above


let anotherUserName = " NewAlbhabets     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length property is: ${this.trim().length}`);
}


anotherUserName.trueLength();


//Directly string access
"madhuriRoy".trueLength();
"iceteaTreeeeeee".trueLength();