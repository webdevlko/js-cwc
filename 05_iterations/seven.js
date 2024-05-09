// Adding number to array directly with MAP 

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num)=> num+10)         // way-1 when scope not open
const newNums = myNums.map( (num)=> {return num+10})   // way-2 when scope return then  
console.log(newNums)



// Adding number to array directly with "for each" methods
const myNums2 = myNums.forEach( (item) => {
    console.log(item +10);
})

//Chaining Multiple MAP methods and filter
console.log("Chaining method start here")

const myNums1 = [1,2,3,4,5,6,7,8,9,10]

const newNums2 = myNums1
                .map( (num) => num*10)      //multuple by 10
                .map ((num) =>  num+1)      //adding by 1
                .filter( (num) => num>=40)      //putting filter above 40
console.log(newNums2)
