

const isAdult = (age) => {
 if ( age >= 18) {
   console.log('Is an adult')
 } else {
   console.log('Is not an adult')
 }
};

const canDrink = (age) => {
  if ( age >= 21) {
    console.log('Can Drink')
  } else {
    console.log('Cannot Drink')
  }
 };

 const isSenior = (age) => age >= 65 && (console.log('Im old as hell') && console.log("I'am young and free"))



export { isAdult, canDrink, isSenior as default };