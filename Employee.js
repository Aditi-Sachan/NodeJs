// Constant variable for Present and Absent
const IS_PRESENT = 1;

// Use Math.random() to generate 0 or 1
let empCheck = Math.floor(Math.random() * 2);

// Check if the employee is present or absent
if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}
