const coding = ["js","rb", "py", "java", "cpp"]


// for Each loop takes call back as a function and don't need to write name of functions


// way-1
// coding.forEach( function (item){
//     console.log(item)
// } )

//way-2--Need not to write  function name
// coding.forEach( (item)=>{
//     console.log(item)
// } )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)     // While calling in function in for each loop, don't need to execute it.

//for each having multiple acess of arrays.
// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// } )

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
            
    },
    {
        languageName: "java",
        languageFileName: "jv",

    },
    {
        languageName: "Python",
        languageFileName: "py",

    }
]

mycoding.forEach( (item)=>{
    console.log(item.languageName)
} )