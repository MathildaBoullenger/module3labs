let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four //This will print "34" because we have an addition of two strings. We need to change this one.

//The correct expression to carry out the addition can be seen below
let newAddition = Number(three) + Number(four)

let multiplication = three * four  //This will print 12
let division = three / four //This will print 0.75
let subtraction = three - four //This will print -1
let lessThan1 = three < four //This will print true

let lessThan2 = thirty < four //This will print true because we are comparing two strings. When comparing two strings, the first caracters are compared first. In this case 4 > 3 is true. We need to change this one to make sense for this exercise.

//The correct expression to carry out the addition can be seen below
let newLessThan2 = Number(thirty) < Number(four)

console.log(newLessThan2)