class Employee {
  constructor(name) {
    this.name = name;
  }

  logInForAttendance = () => {
    console.log("I arrived at work at " + new Date().toLocaleDateString());
  };

  cookTheFood = (meal) => {
    console.log(`I am cooking the ${meal}`);
  };

  cleanTheFloor = () => {
    console.log(`I am cleaning the Floor`);
  };

  cleanTheTable = () => {
    console.log(`I am cleaning the Table`);
  };

  washTheDishes = () => {
    console.log(`I am washing the dishes`);
  };
}

class Dishwasher extends Employee {
  constructor(name) {
    this.name = name;
  }
  cookTheFood = (meal) => {
    throw Error("This is not my responsibility");
  };

  cleanTheFloor = () => {
    throw Error("This is not my responsibility");
  };

  cleanTheTable = () => {
    throw new Error("This is not my responsibility");
  };
}

class Cook extends Employee {
  constructor(name) {
    this.name = name;
  }

  cleanTheFloor = () => {
    throw Error("This is not my responsibility");
  };

  washTheDishes = () => {
    throw Error("This is not my responsibility");
  };

  cleanTheTable = () => {
    throw Error("This is not my responsibility");
  };
}

class Cleaner extends Employee {
  constructor(name) {
    this.name = name;
  }
  cleanTheFloor = () => {
    throw Error("This is not my responsibility");
  };

  washTheDishes = () => {
    throw Error("This is not my responsibility");
  };
}
