//ES6

// class User{
//     //we can add properties & fucntion too

//     //It call first constructor

//     constructor(username, email, password){
//         this.username = username;       //this.username is variable and username is value
//         this.email = email;
//         this.password = password;
//     }

//     //Method
//     encrytPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }




// const coffee = new User("coffee", "sanjay@google.com", "123456778")

// console.log(coffee.encrytPassword());
// console.log(coffee.changeUsername());


//Behind the scene|| Same Task as above|| before classes not arrived in JS

function User(username, email, password){
    this.username = username;  
    this.email = email;
    this.password = password;
}

User.prototype.encrytPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("Tea", "tea@google.com", "123456778")

console.log(tea.encrytPassword());
console.log(tea.changeUsername());