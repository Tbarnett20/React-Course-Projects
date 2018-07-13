// SetUp constructor to take name and age (default to 0)
// Setup new method called getDescription- Terrance is 23 year(s) old

// classes are used to reuse code its like ablueprint to buil the same buildings but all can be unique for example different addresse

class Person {
  constructor(name = 'Anonymous', age = 0) {
   this.name = name;
   this.age = age;
  }
  getGreeting() {
    // return 'Hi I am ' + this.name; + '!'
    return `Hi I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`
  }
}


// const me = new Person('Terrance Danckert', 23);
// console.log(me.getGreeting());
// console.log(me.getDescription())

// const other = new Person();
// console.log(other.getDescription());




class Student extends Person {
  constructor( name, age, major = 'Not Declared') {
    // this (Super) calls the parent function class above (Parent) so we can use are new subclass Student
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      // description = description + '';
      description += ` and their major is ${this.major}.`;
    }

    return description;
  }
}

const me = new Student('Terrance Danckert', 23, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

// Traveler ->
// Add support for me location
// Iverride getGreeting
// 1.hi i am Terrance Danckert. Im visiting from Kentucky
// 2. If no home locoation stick to Parents Getgreeting

class Traveler extends Person {
  constructor(name, location = 'USA') {
    // this (Super) calls the parent function class above (Parent) so we can use are new subclass Student
    super(name)
   this.location = location;
  }
   hasLocation() {
    return !!this.location
  }
    getGreeting() {
      // this gets the original greeting from Parent***
      let greeting = super.getGreeting();
      
      if (this.hasLocation()){
      greeting += ` I am visiting from ${this.location}`
    }
      return greeting;
    }

}

const us = new Traveler('Terrance Danckert', 'Kentucky');
console.log(us.getGreeting())