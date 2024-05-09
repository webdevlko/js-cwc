const coding = ["js","rb", "py", "java", "cpp"]


//for each not gives any return default 
const values = coding.forEach( (item) => {
    // console.log(item);
})


// console.log(values)

/********************Filter Operations****************************/

//filter gives by default returns-- it gives filter values
// when we are using filter use inside call back function and accessing each values, and return only those values which meet conditions 

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNumbs = myNums.filter ( (num)=> num>4);
// const newNumbs = myNums.filter ( (num)=> {              // if scope started then need to write return keywords 
//     return num>4
// }); 


// way-2 
// const newNums = []
// myNums.forEach( (num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


/***************************Book Filter *************************/

const books = [
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2017, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }

];

let  userBooks = books.filter( (bk) => bk.genre === 'History')  //object name is bk , written in one line
userBooks = books.filter( (bk) => bk.publish >=2000 )  //object name is bk , written in filter show before 2000 year books

userBooks = books.filter( (bk) => bk.edition >=2000 ) 
console.log(userBooks);

