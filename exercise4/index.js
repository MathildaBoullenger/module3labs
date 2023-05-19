/*let a = 2, b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
    result += 'less than 10';
} else {
    result += 'greater than 10';
}*/


let a = 8, b = 3;
let result = `${a} + ${b} is `;
console.log((a + b < 10) ? result += 'less than 10' : result += 'greater than 10')

//+= adds the value on the right to the variable on the left and assigns the result back to the variable on the left-hand side. This means that result = result + 'string' above.
