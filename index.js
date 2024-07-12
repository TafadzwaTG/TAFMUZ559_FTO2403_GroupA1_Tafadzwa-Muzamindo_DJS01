/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityKmH = 10000; // velocity (km/h)
const accelerationMetersPerSecondSquared = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const initialFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSecond = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity

const calculateNewVelocity = (initialVelocityKmH, accelerationMetersPerSecondSquared, timeSeconds) => {
  if(
    typeof initialVelocityKmH !=="number"||
    typeof accelerationMetersPerSecondSquared !=="number"||
    typeof timeSeconds !=="number"
  ){
    throw new Error("Invalid parameters. Velocity, acceleration and time must be numbers");
  }
  const accelerationKmHPerHour = accelerationMetersPerSecondSquared * 12960; // convert m/s^2 to km/h^2
  const newVelocity  = initialVelocityKmH +(accelerationKmHPerHour * (timeSeconds/3600)); //convert seconds to hours
  return newVelocity;
}

//Function to calculate new distance
const calculateNewDistance = (initialDistanceKm, initialVelocityKmH, timeSeconds) =>{
  if(
    typeof initialDistanceKm !=="number" ||
    typeof initialVelocityKmH !== "number"||
    typeof timeSeconds !== "number"
  ){
    throw new Error("Invalid parameters. Distance, velocity, and time must be numbers.");
  }
  return initialDistanceKm + (initialVelocityKmH * (timeSeconds/3600)); //convert seconds to hours
};

// Function to calculate remaining fuel
const calculateRemainingFuel = (initialFuelKg, fuelBurnRateKgPerSecond, timeSeconds) => {
  if(
    typeof initialFuelKg !== "number"||
    typeof fuelBurnRateKgPerSecond !=="number"||
    typeof timeSeconds !=="number"
  ){
    throw new Error("Invalid parameters. Fuel, BurnRate, and time must be numbers.");
  }
  const remainingFuelKg = initialFuelKg - (fuelBurnRateKgPerSecond * timeSeconds);
  if(remainingFuelKg < 0){
    throw new Error("Fuel cannot be negative. Check fuel burn rate and time");
  }
  return remainingFuelKg;
};

//Perform calculations
const newDistanceKm = calculateNewDistance(initialDistanceKm, initialVelocityKmH, timeSeconds);
const newVelocityKmH = calculateNewVelocity( initialVelocityKmH, accelerationMetersPerSecondSquared, timeSeconds);
const remainingFuelKg= calculateRemainingFuel(initialFuelKg, fuelBurnRateKgPerSecond, timeSeconds);


console.log(`New Velocity: ${newVelocityKmH} km/h`);
console.log(`New Distance: ${newDistanceKm} km`);
console.log(`Remaining Fuel: ${remainingFuelKg} kg`);






