function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    //e.
    this.canDrive = function() {
        return this.age >= 16;
    }
    return false;
}

//a.
let Person1 = new Person('Tim', 15);
console.log(Person1);
console.log(Person1.canDrive()); 

//b.
let Person2 = new Person('Jasmine', 28);
console.log(Person2);
console.log(Person2.canDrive());

//c.
//d.

class PersonClass {
    constructor(name, age) {
    this.name = name; //The key and value don't have to have the same name 
    this.age = age;
    this.human = true;
}
//e.
canDrive() {
return this.age >= 16 ? true : false;
}
}

let Person3 = new PersonClass ('Josh', 33);
console.log(Person3);
console.log(Person3.canDrive());