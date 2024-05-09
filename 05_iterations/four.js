const myObject ={
    js:"javascript",
    cpp: "computer science",
    rb:"ruby",
    swift: "swift by iphone"
}

/******************************For in Loop **********************************/
//Loop in Object via 
for(const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programing = ["js","rb", "py", "java", "cpp"]

for (const key in programing) {
    // console.log(programing[key]);
}


/*************************MAP is not itreatable via for in loop*******************/

const map = new Map();
map.set('IN', "India")
map.set('USA', "united states of America")
map.set("FR", "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key)
}
