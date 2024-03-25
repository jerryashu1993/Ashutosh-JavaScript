const AccountID = 11223344
let AccountEmail1 = "ashutosh@gmail.com"
var AccountPassword1 = "123456"
let AccountCity1 = "Udaipur"
let AccountState1 = "Rajasthan"

// AccountID = 2 // not execute

AccountEmail = "abc@gmail.com"
AccountPassword = "12345678"
AccountCity = "Jaipur"
AccountState = "Haryana"

console.log(AccountID)
console.log(AccountEmail)
console.log(AccountPassword)
console.log(AccountCity)
console.log(AccountState)

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([AccountID, AccountEmail1, AccountPassword1, AccountCity1, AccountState1])