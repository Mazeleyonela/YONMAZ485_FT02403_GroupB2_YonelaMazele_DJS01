/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityKmH = 10000; // initial velocity in km/h
const accelerationMs2 = 3; // acceleration in m/s^2
const timeInSeconds = 3600; // time in seconds (1 hour)
const initialDistanceKm = 0; // initial distance in km
const initialFuelKg = 5000; // initial fuel in kg
const fuelBurnRateKgS = 0.5; // fuel burn rate in kg/s

// Function to convert km/h to m/s
const convertKmHtoMS = (velocityKmH) => (velocityKmH * 1000) / 3600;

// Function to convert m/s to km/h
const convertMStoKmH = (velocityMs) => (velocityMs * 3600) / 1000;

// Convert initial velocity to m/s for calculations
const initialVelocityMs = convertKmHtoMS(initialVelocityKmH);

// Calculate new distance in km
const finalDistanceKm = initialDistanceKm + (initialVelocityKmH * (timeInSeconds / 3600));

// Calculate remaining fuel in kg
const remainingFuelKg = initialFuelKg - (fuelBurnRateKgS * timeInSeconds);

// Function to calculate new velocity based on acceleration using destructuring
const calcNewVel = ({ accelerationMs2, initialVelocityMs, timeInSeconds }) => {
  if (typeof accelerationMs2 !== 'number' || typeof initialVelocityMs !== 'number' || typeof timeInSeconds !== 'number') {
    throw new Error("Invalid input: Parameters should be a number.");
  }
  if (accelerationMs2 < 0 || initialVelocityMs < 0 || timeInSeconds < 0) {
    throw new Error("Invalid input: Parameters should be less than 0.");
  }
  return initialVelocityMs + (accelerationMs2 * timeInSeconds);
};

// Calculate new velocity in m/s and convert to km/h
const newVelocityMs = calcNewVel({ accelerationMs2, initialVelocityMs, timeInSeconds });
const newVelocityKmH = convertMStoKmH(newVelocityMs);

// Print the corrected values
console.log(`Corrected New Velocity: ${newVelocityKmH.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${finalDistanceKm.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelKg.toFixed(2)} kg`);





