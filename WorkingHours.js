// Constants
const IS_ABSENT = 0;
const PART_TIME = 1;
const FULL_TIME = 2;
const WAGE_PER_HOUR = 20;

// Function to get daily working hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case PART_TIME:
            console.log("Employee is working Part Time");
            return 4;
        case FULL_TIME:
            console.log("Employee is working Full Time");
            return 8;
        default:
            console.log("Employee is Absent");
            return 0;
    }
}

// Use Math.random() to generate 0, 1, or 2
let empCheck = Math.floor(Math.random() * 3);

// Get daily working hours by calling the function
let empHours = getWorkingHours(empCheck);

// Calculate daily wage
let empWage = empHours * WAGE_PER_HOUR;
console.log("Daily Employee Wage: $" + empWage);
