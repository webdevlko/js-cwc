const promiseOne = new Promise(function(resolve, reject){
    //DO an async task
    //DB calls, cryptographty, network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)

})

//Resolve have connection with "resolve"
promiseOne.then(function(){
    console.log("Promise Consumed");
})


// Another way to write of promise, if not storing in varaiable
new Promise (function (resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 to Resolve")
})

//third way for promise-- resolve always connect
//if something is passing in resolve parameter then we could expect these in function paramer as we receive "user" paramenets

const promiseThree = new Promise(function(resolve, reject){
    setTimeout( function(){
        resolve({username: "Chai", email: "webdevlko@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


//Promise -4 -- if and else case of promise if request not fullfilled
const promiseFour = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "golden", password: "123"})
        }
        else{
            reject('Error: Something went wrong ')
        }
    },1000)
})

// promiseFour.then(function(){

// })

//Below will then will work when fucntion will call and cath will work when error comes
// promiseFour.then().catch()



//Chaining of ,then
promiseFour
.then((user)=>{
    console.log(user)
    return user.username
}).
then((username) =>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("The promise of either resolved or rejected")
    
})

//Promise-5 Handling promise with Async Awat
const promiseFive = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false  ;
        if(!error){
            resolve({username: "javascript", password: "53662"})
        }
        else{
            reject('Error: JS went wrong ')
        }
    },1000)
})


// using Async Awat
async function consumePromiseFive(){
   try{
    const response = await promiseFive;
    console.log(response)
   }
   catch (error){
    console.log(error)
}
}

// Receive values from database or API via async await
// async function getAllUsers(){
//   try{
//     const response = await fetch ('https://jsonplaceholder.typicode.com/users')

//     //conversion in JSON also takes times thats we use await below too
//     const data = await response.json()
//     console.log(data)
//   }
//   catch(error){
//     console.log("E:", error);
//   }
// }

// getAllUsers()

// fetech() Receive values from database or API via fetch URL-- to avoid try catch 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{                 // process the response
    console.log(data) 
})
.catch((error)=>{               //handle error
    console.log(error)
})



