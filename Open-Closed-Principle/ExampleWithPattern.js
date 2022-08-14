class Sedan {
  constructor(color) {
    this.vehicleType = "Sedan";
    this.vehicleColor = color;
  }

  runVehicle() {
    console.log(
      `=============RUNNING A ${this.vehicleColor} SEDAN CAR=============`
    );
    console.log("1. Get in the driver's seat and buckle up");
    console.log("2. Insert the key into the ignition.");
    console.log(
      "3. If you're starting a car with a manual transmission, put the gear stick in neutral."
    );
    console.log("4. Twist the ignition key to start the car");
  }
}

class Boat {
  constructor(color) {
    this.vehicleType = "Boat";
    this.vehicleColor = color;
  }
  runVehicle() {
    console.log(
      `============DRIVING A ${this.vehicleColor} BOAT================`
    );
    console.log("1. Run the Blower");
    console.log("2. Start the Engine ");
    console.log("3. Remove the Lines ");
    console.log("4. Start Moving");
    console.log("5. Adjust the Throttle");
  }
}
