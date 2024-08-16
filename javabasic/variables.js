const AccountId = 144553
let AccountEmail1 = "ashutosh@gmail.com"
var AccountPassword1 = "12345"
let AccountCity1 = "Udaipur"
let AccountState1 = "Rajasthan"

// AccountId = 2 // not execute

AccountEmail = "abc@gmail.com"
AccountPassword = "1234567"
AccountCity = "Jaipur"
AccountState = "Haryana"

console.log(AccountId)
console.log(AccountEmail)
console.log(AccountPassword)
console.log(AccountCity)
console.log(AccountState)

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([AccountId, AccountEmail1, AccountPassword1, AccountCity1, AccountState1])
