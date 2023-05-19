let teamSports = ['Hockey', 'Cricket', 'Volleyball']; //This is an array
let dog1 = 'Bingo'; //This is a string
let cat1 = { name: 'Fluffy', breed: 'Siberian' }; //This is an object

//let moreSports = teamSports;
let moreSports = [ ...teamSports ];
moreSports.push("Soccer", "Netball"); 
moreSports.unshift("Handball");

let dog2 = dog1;
dog2 = "Barny";

let cat2 = { ...cat1, name: 'Ollie' };

console.log(teamSports); //Was initially overwritten by moreSports because the original and new array refer to the same object. If a referenced object is modified, the changes are visible to both the new and original arrays.
console.log(dog1);
console.log(cat1); //Was initially overwritten by cat2 because it is an object and was stored in the same memory as cat2 when set equal (cat1 = cat2).

console.log(moreSports);
console.log(dog2);
console.log(cat2); 