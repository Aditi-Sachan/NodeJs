// Constants
const IS_ABSENT = 0;
const PART_TIME = 1;
const FULL_TIME = 2;
const WAGE_PER_HOUR = 20;

// Use Math.random() to generate 0, 1, or 2
let empCheck = Math.floor(Math.random() * 3);

// Declare a variable to hold work hours
let empHours = 0;

// Use switch to check the work type
switch (empCheck) {
    case PART_TIME:
        empHours = 4;
        console.log("Employee is working Part Time");
        break;
    case FULL_TIME:
        empHours = 8;
        console.log("Employee is working Full Time");
        break;
    default:
        empHours = 0;
        console.log("Employee is Absent");
        break;
}

// Calculate daily wage
let empWage = empHours * WAGE_PER_HOUR;
console.log("Daily Employee Wage: $" + empWage);
