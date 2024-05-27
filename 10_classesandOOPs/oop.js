    const user = {
        username: "ritesh",
        loginCount : 0 ,
        signIN :true,
        getUserDetails : function(){
            // console.log("Get user details from database")

            //Use 'this' keyword for current context, apne saman ki baat kar rha, just above scope se within current object
            // console.log(`Username: ${this.username}`)

            //this will show what contains
            console.log(this);
        }

    }

    // console.log(user.username)
    // console.log(user.getUserDetails())

    //Global context 'this' values
    // console.log(this)

    //Pointer- In order to avoid same type in user2 we use constructors

    // 'new' is construction function, use same instances
    // const promiseOne = new Promise()
    // const date = new Date()

    // Pointer if we use function then is use same instance, if we not use new then it override the values of userTwo value in userOne
    function User(username, loginCount, isLoggedIn){
        this.username = username;   //left side value is varialbe and right side is receving parameters
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;
        this.greeting = function(){
            console.log(`Welcome ${this.username}`);
        }

        return this
        // it is implicilty , writing it or not does not impact

    }

    const userOne = new User("Ritesh", 12, true)
    const userTwo = new User("Rocky", 69, false)

    console.log(userTwo);

    //for above line, run above code before and after new key and seperate try to remove this, it implicilty 


    //Basic working mecanism contruction new keywords
    // Step-1 => Create Object
    // Step-2 => this value pass on in instance of
    // Step-3 => this values add where we add 