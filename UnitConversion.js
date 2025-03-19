// Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log("42 inches is", feet, "feet");

// Convert Rectangular Plot dimensions to meters
let lengthFeet = 60;
let widthFeet = 40;
let feetToMeters = 0.3048;
let lengthMeters = lengthFeet * feetToMeters;
let widthMeters = widthFeet * feetToMeters;
console.log("Plot dimensions in meters:", lengthMeters, "x", widthMeters);

// Calculate area of 25 such plots in acres
let areaMeters = lengthMeters * widthMeters;
let totalAreaMeters = areaMeters * 25;
let metersToAcres = 0.000247105;
let totalAreaAcres = totalAreaMeters * metersToAcres;
console.log("Total area of 25 plots in acres:", totalAreaAcres);
