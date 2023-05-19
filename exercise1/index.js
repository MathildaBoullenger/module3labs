"" + 1 + 0 //output guess: 1. Wrong answer: Because we start with a string, and all operators are additions, it will print 010 which gets converted to 10. No operations are made.
"" - 1 + 0 //output guess: -1. Correct answer: Because we have different operators, it is not treated as a string and operations are made.
true + false // output guess: 1. Correct answer: true gets converted to 1 and false to 0. 
!true // output guess: 0. Wrong answer: Because we are not doing mathematical operations, it simply returns the negative value of the boolean which is false here.
6 / "3" // output guess: 2. Correct answer: Because we have a mathematical expression, the string is implicitely converted to a number and the operation is made.
"2" * "3" // output guess: 6. Correct answer: Because we have a mathematical expression, both strings are implicitely converted to a number and the operation is made.
4 + 5 + "px" // output guess: 9px. Correct answer: Because the numbers are to the left, the mathematical operation is made and then the string "px" is added.
"$" + 4 + 5 // output guess: $45. Correct answer: Because the string ‘$’ is concatenated with number 4 then number 5.
"4" - 2 // output guess: 2. Correct answer: Because we have a mathematical operation, the "4" string is implicitely converted to a number and the mathematical operation is made.
"4px" - 2 // output guess: 4px - 2. Wrong answer: Because we have tried to carry out a mathematical operation on a number and a string, the calculation can't be made and the output shown is "NaN / Not a Number".
" -9 " + 5 // output guess: -9 + 5. Wrong answer: In the output, the + sign is removed as it is implied in "5". As guessed, the calculation is not carried out because this expression starts with a string and uses the + operator.
" -9 " - 5 // output guess: -14. Correct answer: The string is converted to a number automatically and the mathematical operation is carried out (because it is not an addition).
null + 1 // output guess: 1. Correct answer: Null is converted to 0 here (because it is not a string) and is added to 1.
undefined + 1 // output guess: 1. Wrong answer: Because undefined is not a valid numeric value, this will print: NaN.
undefined == null // output guess: true. Correct answer: Both undefined and null represent the absence of a value.
undefined === null // output guess: false. Correct answer: Undefined and null don't have the same type. === does a more thourough comparison, comparing types as well as values. Undefined has a type of "undefined" and Null has a type of "Object".
" \t \n" - 2 // output guess: NaN. Wrong answer: This prints "-2" because \t and \n are whitespace caracters in JavaScript.

console.log("" + 1 + 0)
console.log("" - 1 + 0 )
console.log(true + false)
console.log(!true)
console.log(6 / "3")
console.log("2" * "3")
console.log(4 + 5 + "px")
console.log("$" + 4 + 5)
console.log("4" - 2 )
console.log("4px" - 2)
console.log(" -9 " + 5)
console.log(" -9 " - 5 )
console.log(null + 1 )
console.log(undefined + 1)
console.log(undefined == null)
console.log(undefined === null)
console.log(" \t \n" - 2)