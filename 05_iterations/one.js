//Loops

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element);
    
// }


//Printing Outter Loop & tables

for (let i = 0; i <= 10; i++) {
   // console.log(`Outter Loop ${i}`)
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner Loop Value ${j} and inner loop ${i}`)
        //  console.log(i + '*' + j+' = ' + i*j )    //+ use only for separation
    }
    
}


//Printing array 
let myArray = ["Flash", "Superman", "Batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

//Break & Continue

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log("Deducted 5");
        break;                          //when we need to stop iteration process at a point
    }
    console.log(`Value of i is ${index}`)
    
}
for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log("Deducted 5");
        continue;                          // after catching one point, iteration keep run
    }
    console.log(`Value of i is ${index}`)
    
}