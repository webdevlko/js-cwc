//When multiple items adding in cart

function calculateCartPrice(...num1) {              //Rest Operators
    return num1
}

console.log(calculateCartPrice(200,300,400))    // all values adding in array after that we will perform the actions.   


//Type two 
function calculateCartPrice(val1, val2, ...num1) {              //Rest Operators
    return num1
}
console.log(calculateCartPrice(200,300,400,2000))               // values 200 goes in val1 and 300 in val2 reset goes in array num1

//Passing object in fuctions and how to use it
const user = {
    username: "Roman",
    price: 259
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);


//handle object

handleObject({
    username: "Roman2",
    price: 258
})

//Passing arrys in functions
const myNewArray = [200,400,500,1000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));     //printing issue

console.log(returnSecondValue([200,900,666,87654,544]))

