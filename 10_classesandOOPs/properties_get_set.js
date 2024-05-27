//When getter and setter not avalible in past along with class
function User (email,password){
    
        this._email = email;
        this._password = password

        // below are getter and setter when it was not arrived

        Object.defineProperty(this,"email", {
            get: function(){
                return this._email.toUpperCase()
            },
            set:function(value){
                this._email = value   //adding value in this.email
            },
        })
        Object.defineProperty(this,"password", {
            get: function(){
                return this._password.toUpperCase()
            },
            set:function(value){
                this._password = value   //adding value in this.email
            },
        })
     
}

const ham = new User("ham@google.com","chai")

console.log(ham.email);