function createVehicle(type, brand, model, year) {
  return { type, brand, model, year };
}

// Create two different vehicles using the factory function
const vehicle1 = createVehicle("Car", "Toyota", "Camry", 2020);
const vehicle2 = createVehicle("Motorcycle", "Honda", "CBR500R", 2019);

// Test the vehicles
console.log(vehicle1);
console.log(vehicle2);
