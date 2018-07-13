// ES5 Function

// const square = function (x) {
//     return x * x;
// };

// console.log(square(8));

// // ES6 Arrow Function

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

// // Arrow Function Expression Syntax
// // if it only returns a single expression like so we dont need to explicitley use 'return'

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

/**********************************/
// Challenge - Use arrow functions
// getFirstName('Terrance Danckert') -> "Terrance"
// Create regular arrow function
// Create arrow function using shorthand syntax

/* Arrow Function Below ***

const getFirstName = (fullName) => {
   return fullName.split(' ')[0];
};

console.log(getFirstName('Terrance Danckert'));

*/

// Arrow Function Shorthand of above function ***

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Terrance Danckert'));