class Employee {
  constructor(name) {
    this.name = name;
  }

  logInForAttendance = () => {
    console.log("I arrived at work at " + new Date().toTimeString());
  };
}
const dishwasherFunctions = {
  washTheDishes: () => {
    console.log(`I am washing the dishes`);
  },
};

const cookFunctions = {
  cookTheFood: (meal) => {
    console.log(`I am cooking the ${meal}`);
  },
};

const cleanerFunctions = {
  cleanTheFloor: () => {
    console.log(`I am cleaning the Floor`);
  },
  cleanTheTable: () => {
    console.log(`I am cleaning the Table`);
  },
};

class Dishwasher extends Employee {}

Object.assign(Dishwasher.prototype, dishwasherFunctions);

class Cook extends Employee {}

Object.assign(Cook.prototype, cookFunctions);

class Cleaner extends Employee {}

Object.assign(Cleaner.prototype, cleanerFunctions);
