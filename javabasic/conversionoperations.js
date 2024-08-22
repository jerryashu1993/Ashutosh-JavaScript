let score = "Ashutosh" // if the given input is in without "" then the output is 'number' & if the input is in "" then it became 'string".

// const {score} = req.body(In this there is no guarantee of the value is string or number or anything else. So for now we don't know.)
//console.log(typeof score); // This method is also right.
//console.log(typeof(score)); // This method is also same & right.

let valueInNumber = Number(score) // while working on this it is guaranteed that score is converted into number.
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// convertion examples
// "33" => 33 (number form easily get converted).
// "33abc" => NaN (it not get converted easily, so we get output NaN (Not a Number)).
// (Boolean value) true => 1; false => 0

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// Please check spelling of isLoggedIn in line 17 and in line 20, which should be same, otherwise it will give continuous(Referrence Error: isLoggingIn is not defined) issue. 
// In boolean when you enter 1 => true; when you enter 0 => false
// When you enter "" => false
// "Ashutosh" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

// ********************************OPERATIONS****************************************

let value = 3
let negValue = -value
//console.log(negValue);

//console.log(2+2) //Addition
//console.log(2-2) //Subtraction
//console.log(2*2) //Multiplication
//console.log(2**2) //By placing 2 "**" symbol, it became the power method of mathematics "2 to the power 2".
//console.log(2/2) //By placing "/" symbol it denotes division.
//console.log(2%3) //By placing "%" symbol it denotes "Remainder Function" of mathematics or you can say "Modulus".

//(%)Modulus is also used in crptography, algorithm etc.

let str1 = "Hey"
let str2 = " Ashutosh Das"
let str3 = str1 + str2
//console.log(str3);

//console.log(1 + 2)
//console.log("1" + 2)
//console.log(1 + "2")
//console.log("1" + "2")
//console.log("1" + 2 + 2)
//console.log(1 + 2 + "3") // In real life program typing, this type of confusing program typing is never appreciated by any of the companies. 
//Use "()" Parentheses to diffenciate b/w input codes so that reviewer can check & easily understand. Otherwise in big corporates your code would not be reviewed for whatever companies you are giving interview and they will send back the code and say do code again, this is not a good way to write a code.
//This is a type of messy codes.


//console.log(((3 + 4) + 5) % 6)
//This is a right way to code.

//console.log(+true)
//console.log(true+) // This will not execute. This is a wrong.
//console.log(+"")

let num1, num2, num3
//num1 = num2 = num3 = 3 + 9
//console.log(num1)

let gameCounter = 1000
gameCounter++ // ++gamecounter - Presidence Operator(prefix operator or postfix operator) both are right. But actually there is a difference in it. In prefix, value is incremented before usage and in postfix, value is incremented after the usage.
// You can read and learn this from "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment"
// (++) it is called Presidence Operator.
console.log(gameCounter)





