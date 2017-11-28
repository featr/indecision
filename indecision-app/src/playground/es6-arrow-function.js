// const square = function (x) {
//     return x * x;
// }

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(10));

// const getFirstName = (fullName) => {
//    return fullName.split(' ')[0];
// }

// const getFirstName = (fullName) => fullName.split(' ')[0];

// console.log(getFirstName("Felipe John Meyer"));

// Arrow Function 2

// arguments object - no longer bound with arrow functions

// const add =  (a, b) => {
//     console.log(arguments)
//     return a + b;
// }
// console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name:'Evlogi',
    cities:['Dobrich', 'Varna'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);        
    }
};
console.log(user.printPlacesLived());

//Challenge area

const multiplier = {
    // numbers - array of numbers
    numbers:[1,2,4,6,9],
    // multiplyBy - single number
    multiplyBy: 5,    
    // multiply  return a new array where the numbers have been multiplied
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());