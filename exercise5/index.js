function getGreeting(name) {
return 'Hello ' + name + '!';
}

const getGreetingExpression = function (name) {
return 'Hello ' + name + '!'; 
}

const getGreetingArrow = (name) => {
return 'Hello ' + name + '!';   
}      

function getGreetingAlternative(name) {
return `Hello ${name}!`;
}
    
console.log(getGreeting('Mathilda'));
console.log(getGreetingExpression('Mathilda'));
console.log(getGreetingArrow('Mathilda'));

console.log(getGreetingAlternative('Mathilda'));
