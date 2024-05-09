//Reduce use case for shopping cart add => it runs in loop accumlator value start from 
// 0 and further
const myNums = [1,2,3]


//Way-1 with normal function
// const myTotal = myNums.reduce(function (accumlator, currentValue){
//     console.log(`accumulator: ${accumlator} and currvalue: ${currentValue}`)
//     return accumlator + currentValue
// }, 0)

// console.log(myTotal)

//Way-2 with arrow function

// const myTotal = myNums.reduce( (accumlator,currentValue) => accumlator+currentValue, 0)
// console.log(myTotal)

//Adding shoping cart value using reduce

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999 
    },
    {
        itemName: "py course",
        price: 9999 
    },
    {
        itemName: "mobile dv course",
        price: 5999 
    },
    {
        itemName: "data scientist course",
        price: 12999 
    }
]
// accumator and item name are completly upto you, for object, item.keyvalues need to use
const priceToPay = shoppingCart.reduce ( (accumlator, item) => accumlator+item.price,0 )

console.log(priceToPay)