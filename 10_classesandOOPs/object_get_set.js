//Object based getter and setter

class User{
    // _email: 'h@hcl.com',
    // _password: "3131",
   

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    }

    //Objets are called factory function

    const ham = Object.create(User)

    console.log(ham.email)