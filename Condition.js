const IS_ABSENT = 0;
const PART_TIME = 1;
const FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case PART_TIME:
            return 4;
        case FULL_TIME:
            return 8;
        default:
            return 0;
    }
}

let totalEmpHours = 0, totalWorkingDays = 0;
while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    let empCheck = Math.floor(Math.random() * 3);
    totalEmpHours += getWorkingHours(empCheck);
    totalWorkingDays++;
}

let totalEmpWage = totalEmpHours * WAGE_PER_HOUR;
console.log("Total Days: " + totalWorkingDays + ", Total Hours: " + totalEmpHours + ", Total Employee Wage: $" + totalEmpWage);
