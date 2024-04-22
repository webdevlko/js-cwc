//Multiple work as reduce functions
// console.log("R");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("H");




function sayMyName ()  {
    console.log("S");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("N");
}


// sayMyName //This is refrence

// sayMyName() // This is execution | Calling the function


//Function without return
// function addTwoNumber(num1,num2){   //while creating functions paramener
//     console.log(num1+num2);

// }

// addTwoNumber(6,5); //6,5 are arguments

//  const result1 = addTwoNumber("") 
//  console.log("Result :", result1);                   //This line give undefined due to function not return values

//Function with return
function addTwoNumber(num1,num2){   //while creating functions parameter
    // Way-1
    // let result = (num1+num2);
    
    // return result; 
    // console.log("Kapil") //after return nothing will work

   // way-2
    // return num1+num2

}



//  const result = addTwoNumber(500,600) 
//  console.log("Result is :", result);                   //This line give undefined due to function not return values

 //Note 1- only return value can be store in variable, not console.log values

 function loginUserMessage(username){ //default value will work argument not given
    if(username === undefined){
        console.log("please enter username")
        return
    }
    // if(undefined){  //both are same
    //     console.log("please enter username")
    //     return
    // }
    return `${username} just logged in`
 }

//  console.log(loginUserMessage("Ramesh"));

 //if argument not given then "undefined" will come

// Addtion formula
 function addFuctin(p1, p2) {
    return p1 + p2;
  }

  const addResult =  addFuctin(100,9);
  console.log(`Addition is ${addResult} `)


  
 function mulFuctin(p1, p2) {
    return p1 * p2;

  }

//   const mulResult =  mulFuctin(100,9)
//   console.log(`Multiple is ${mulResult} `)

  const mulResult =  mulFuctin(545645,5415)
  console.log(`Multiple is ${mulResult} `)