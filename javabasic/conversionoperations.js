let score = "Ashutosh" // if the given input is in without "" then the output is 'number' & if the input is in "" then it became 'string".

// const {score} = req.body(In this there is no guarantee of the value is string or number or anything else. So for now we don't know.)
console.log(typeof score); // This method is also right.
console.log(typeof(score)); // This method is also same & right.

let valueInNumber = Number(score) // while working on this it is guaranteed that score is converted into number.
console.log(typeof valueInNumber);
console.log(valueInNumber);


// convertion examples
// "33" => 33 (number form easily get converted).
// "33abc" => NaN (it not get converted easily, so we get output NaN (Not a Number)).
// (Boolean value) true => 1; false => 0

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// Please check spelling of isLoggedIn in line 17 and in line 20, which should be same, otherwise it will give continuous(Referrence Error: isLoggingIn is not defined) issue. 
// In boolean when you enter 1 => true; when you enter 0 => false
// When you enter "" => false
// "Ashutosh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

