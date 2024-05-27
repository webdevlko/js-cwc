class User{
        constructor(username){
            this.username= username
        }

        logMe(){
            console.log(`Username ${this.username}`)
            }

        
            
        // if developer not want to give access of below method to all newly created instances using User Class     
        static createID(){
            return `123`
        }
}

const ritesh = new User("ritesh")
// console.log(ritesh.createID())

//Lower on left taking power from right powerfull one
class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iphone", "ray@google.com")
iPhone.logMe()   //this will work becasue static not mention

console.log(iPhone.createID())   // this will not work due to static put for restriction for child and stoping for inheritance