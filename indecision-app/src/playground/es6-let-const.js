var nameVar = 'Terrance';
var nameVar = 'Abby';
console.log('nameVar', nameVar);

// Cannot redefine variables but can change value
let nameLet = 'Jimmy';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// cannot reasign name or value
const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Sammy';
    return petName;
};

const petName = getPetName();
console.log(petName);



// Var is functioned scoped

// Block Scoping (let & const) only accessible inside curly braces --> {}

// If I wanted access outside of the scope I could define a varible  above using let and dont assign it anything then reassign it a new value where inside the curly braces
const fullName = 'Terrance Danckert';

// let firstName;

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName)
}

// will not work because it is outside of the scope / curly braces
// console.log(firstName);