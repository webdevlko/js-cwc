class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

// Taking power just super
class Teacher extends User{
    constructor(username, email, password){

        //calling parent class properties and having access
        super(username)  //geting varibles data from out of scope using super
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New courser added by ${this.username}`)

    }
}

// Need to add new keywords
const chai = new Teacher("Chai", "chai@google.com", "65464")

chai.addCourse()

const masalaChai = new User("masalachai")

masalaChai.logMe()

//checking instance of some class or not

console.log(chai instanceof User);