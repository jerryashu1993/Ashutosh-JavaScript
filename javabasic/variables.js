const AccountId = 144553
let AccountEmail1 = "ashutosh@gmail.com"
let AccountPassword1 = "12345"
let AccountCity1 = "Udaipur"
let AccountState1;

// AccountId = 2 // not execute

AccountEmail = "abc@gmail.com"
AccountPassword = "1234567"
AccountCity = "Jaipur"
AccountState = "Haryana"

console.log(AccountId)
console.log(AccountEmail1)
console.log(AccountPassword1)
console.log(AccountCity1)
console.log(AccountState1)

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([AccountId, AccountEmail, AccountPassword, AccountCity, AccountState])
