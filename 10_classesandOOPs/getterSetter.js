class User{
    constructor(email,password){
    this.email = email;
    this.password = password
 
    }

    //For Getting the value from outside the class use getter
   


    get email(){
        return this._email.toUpperCase()
    }
    
    set email(value){
      this._email = value
    }

    // For setting the value , we can do via setterlers for inserting the value
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value 
    }
   
}

   

const ritesh = new User("ritesh@google.com", "123")

console.log(ritesh.password)
console.log(ritesh.email)