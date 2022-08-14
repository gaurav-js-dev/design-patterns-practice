const runVehicle = (listOfVehicles) => {
  listOfVehicles.map((item) => {
    switch (item.vehicleType) {
      case "Sedan": {
        console.log("=============RUNNING A SEDAN CAR=============");
        console.log("1. Get in the driver's seat and buckle up");
        console.log("2. Insert the key into the ignition.");
        console.log(
          "3. If you're starting a car with a manual transmission, put the gear stick in neutral."
        );
        console.log("4. Twist the ignition key to start the car");

        break;
      }
      case "Boat": {
        console.log("============DRIVING A BOAT================");
        console.log("1. Run the Blower");
        console.log("2. Start the Engine ");
        console.log("3. Remove the Lines ");
        console.log("4. Start Moving");
        console.log("5. Adjust the Throttle");

        break;
      }
      case "Airplane": {
        console.log("==============FLYING AN AIRPLANE==============");
        console.log(
          "1. Perform an inspection of the aircraft before getting in"
        );
        console.log("2. Locate the flight control (column) in the cockpit");
        console.log("3. Locate the throttle and fuel mixture controls.");
        console.log("4. Familiarize yourself with the flight instruments.");
        console.log("5. Locate the landing gear controls.");
        console.log("6. Place your feet on the rudder pedals.");
        break;
      }

      default: {
        console.log("Unknown Vehicle");
        break;
      }
    }
  });
};

const VEHICLES = [
  {
    vehicleType: "Sedan",
    vehicleColor: "Red",
  },
  {
    vehicleType: "Boat",
    vehicleColor: "Green",
  },
  {
    vehicleType: "Airplane",
    vehicleColor: "Violet",
  },
];

runVehicle(VEHICLES);
