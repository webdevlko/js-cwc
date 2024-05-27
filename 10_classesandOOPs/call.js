function setUserName(username){
    //complex DB Call for check same name username
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password){
    setUserName(username); // only cosole work not able to take values from setuserfunction

setUserName.call(this, username);  // this will take values from setUserfucntion

this.email = email;
this.password = password
}

const chai = new createUser("chai", "test@google.com", "123")

console.log(chai)