//check which data type allows or not

const accountID = 1543; //Check why const we use, we cant values- these 

let accountEmail = "victorroy@google.com";

var accountPassword = "123456"; //having scope issue

accountCity = "Lucknow"


accountEmail = "hc@hcl.com";
accountPassword = "5454454";
accountCity = "Bengulur";
// console.log(accountId);

//for multiple console log

console.table([accountID,accountEmail, accountPassword,accountCity])

console.log(typeof(accountCity));

/*
Prefer not use var
becasue of issue in block scope and functional scope
*/
