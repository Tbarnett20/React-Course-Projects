// argument objects - no longer bound with arrow functions
 const add = (a ,b) => {
    //  cannot use 'arguments' with this arrow function
    //  console.log(arguments);
     return a + b;
 }
console.log(add(55,1,100));

//  'this' keyword = no longer bound

const user = {
    name: 'Terrance',
    cities: ['Kentucky', 'Ohio', 'Florida'],
    // If we wanna use 'this' in the method below we have to keep it in ES5 function

    //  Old method --> printPlacesLived: function () {
        // New method syntax called method definition syntax
        printPlacesLived() {
        // Map() method gets called for every item in the array but you can transform every item getting a new array unlike forEach()
        
        // Concise version
        const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);
        return cityMessages;

        // Not the best way to write this arrow function since it only has one arrow function
        // const cityMessages = this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        // });
        // return cityMessages;
        // Create a variable to be able to use this in the function below***

/*        const that = this;

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
     });
   }
};

*/

// However if this was an arrow function then it would just use its parents function above.....new arrow function showed below***

    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city);
    //  });


   }
};

console.log(user.printPlacesLived());

// Challenge area

// number - array of numbers
// multiplyBy- single number
// multiply - return a new array where the numbers have been multiplied

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
    const multipliedNumbers = this.numbers.map((product) => product * this.multiplyBy);
    return multipliedNumbers;
    }
};

console.log(multiplier.multiply());