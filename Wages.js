const IS_ABSENT = 0;
const PART_TIME = 1;
const FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;

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

let totalEmpHours = 0;
for (let day = 0; day < WORKING_DAYS_PER_MONTH; day++) {
    let empCheck = Math.floor(Math.random() * 3);
    totalEmpHours += getWorkingHours(empCheck);
}

let totalEmpWage = totalEmpHours * WAGE_PER_HOUR;
console.log("Total Employee Wage for the Month: $" + totalEmpWage);
