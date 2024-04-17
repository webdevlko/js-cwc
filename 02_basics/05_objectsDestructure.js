//Destructing of Object

const course ={
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "ritesh"

}

//Way to call values of object, we can change name in short
//console.log(course.courseInstructor)


//Way-2 to access object values & Destructing the object, no need to use all big name, you can change the name in order to access it , instructor name we are accessing

// Way-3
const {courseInstructor} = course
console.log(courseInstructor)

//Way-4--creating custom short name- We are destrucring
const {courseInstructor: instructor} = course
console.log(Instructor)

//Basic method, it is props, it uses in destrucring, it is used in React
const navbar = ({company}) => {

}

navbar(company = "ritehsh");

const navbarr = () =>{
    
}


//JSON fromat API => https://api.github.com/users/hiteshchoudhary

// {
//     "name": "ritesh",
//     "coursename": "JS learning in New Way",
//     "rating": 22
// }

//Some time API send data in Array

//API link
// https://randomuser.me/

//JSON Formatter
// https://jsonformatter.org/
[
    {},
    {},
    {}
]