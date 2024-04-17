const tinderUser = new Object() //Singleton Objects

const tinderUser2 = {}; //Non single object


tinderUser.id = "23654abc";
tinderUser.name=  "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName : {            //Can nest in multiple nest object group
        firstName: "ritesh",
        lastName : "Choudhry",
    }
    }
}

// console.log(regularUser.fullName.userFullName.lastName);

//Combining objects

const obj1 = {1:"a",2: "b"};
const obj2 = {3:"a", 4:"b"};
const obj4 = {5: "c", 6: "d"}


// Method-1 -- Bigger obj3  Object contains small objects obj1 & obj2;
// const obj3 = {obj1,obj2};
// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2,obj4); //empty object is target and rest are sources, it will merge
// console.log(obj3);


//2- Method By Spread Method also it will merge in one object

const obj5 = {...obj1, ...obj2 };
 
//  console.log(obj5)


const users =[
        {
        id: 1,
        email: "new@gmail.com"
        },
        {
        id: 2,
        email: "new1@gmail.com"
        },
        {
        id: 3,
        email: "new2@gmail.com"
        },
  
]

//Accessig the data from Array format API or database receiving
// console.log(users[0].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   //only keys
// console.log(Object.values(tinderUser));  //only values
// console.log(Object.entries(tinderUser));  //it make complete all array inside all array;


// //Before adding any property check with this has OwnProperty
console.log(tinderUser.hasOwnProperty("xyz"));

