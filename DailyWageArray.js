const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const WORKING_DAYS = 20;

let dailyWages = [];
let totalWage = 0;

for (let day = 1; day <= WORKING_DAYS; day++) {
    let workHours = Math.random() < 0.5 ? FULL_DAY_HOURS : PART_TIME_HOURS;
    let dailyWage = workHours * WAGE_PER_HOUR;
    dailyWages.push(dailyWage);
    totalWage += dailyWage;
}

console.log("Daily Wages:", dailyWages);
console.log("Total Wage for", WORKING_DAYS, "days:", totalWage);
