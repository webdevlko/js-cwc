

// console.log(Math.PI);

// Math.PI = 5
 
// console.log(Math.PI);


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

const chai= {
    name:'giner chai',
    price: 250,
    isAvaliable :true,
    orderChai : function(){
        console.log("Chain nahi bani");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
  enumerable: false,
  
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//this will not allow to iterarte loop
// for (let [key, value]of chai) {
//    console.log(`${key} : ${value}`);
    
// }

//This will run loop
for (let [key, value]of Object.entries(chai)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
   
    
}