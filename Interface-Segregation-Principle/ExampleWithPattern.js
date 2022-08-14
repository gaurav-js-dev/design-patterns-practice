class Employee {
  constructor(name) {
    this.name = name;
  }

  logInForAttendance = () => {
    console.log("I arrived at work at " + new Date().toTimeString());
  };
}
