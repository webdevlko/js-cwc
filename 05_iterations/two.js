//while loop = condtion check in last

let index =0;
while( index<=10 ){
    console.log(`value of index is ${index}`)
    index = index+2;                //write a condition where condition terminate and end the repeating process
}

let myArray = ["Batman", "Superman", "Flash"];
let arr = 0;
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`)
    arr = arr + 1;                  // always write increment & decrement condition otherwise it will not  stop
}

//Do while conditon-- do once check further


let score = 1;

do {
    console.log(`Score is ${score}`)
    score++
}while(score<=10);
