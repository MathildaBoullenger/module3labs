
const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

// The function below needs to be defined before it is called as it is an arrow function. Hoisting works only for declarations.

const getCatchPhrase = (person) => {
    return person.numFingers === 6 ? ' You killed my father. Prepare to die.' : ' Nice to meet you.';
};

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
        return(greeting + getCatchPhrase(person)); //getCatchPhrase is not a function anymore and needs to be called like a variable.
    }

    /*getCatchPhrase(person) {
        if (person.numFingers == 6) {
            return(' You killed my father. Prepare to die.')
        }
        return ' Nice to meet you.';
    }*/
}

console.log(inigo.greeting(westley));
console.log(inigo.greeting(rugen));