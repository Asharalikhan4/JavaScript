const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    // start: function() {
    //   console.log('Engine started');
    // },
    start(){
        console.log("Engine started");
    },
    stop: function() {
      console.log('Engine stopped');
    }
  };
  
  // Accessing object properties
  console.log(car.brand); // Output: Toyota
  console.log(car.year);  // Output: 2022
  
  // Calling object methods
  car.start(); // Output: Engine started
  car.stop();  // Output: Engine stopped
  