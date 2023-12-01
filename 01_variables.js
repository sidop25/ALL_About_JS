// there are some variables created 

const accountId = 1234  // const - the value cannot changed
let accountEmail = "siddhant@google.com"     // let - value can be changed
var accountPassword = "1234" // the value can be changed
accountCity = "Aurangabad"  // created a varible without the use of var,let and const

// lets see wether we can change the value of the variables and also console it to see if there is an error
// accountId = 12345 // throws an error we cannot change the value of const
accountEmail = "siddhant@yahoo.com"
accountPassword = "12345"
accountCity = "latur"

console.table([accountEmail, accountPassword, accountCity])