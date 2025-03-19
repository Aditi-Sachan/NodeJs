const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const WORKING_DAYS = 20;

// Create a Map to store Day-wise Wage
let dayWiseWageMap = new Map();
let totalWage = 0;

// Generate daily wages for 20 days and store in Map
for (let day = 1; day <= WORKING_DAYS; day++) {
    let workHours = Math.random() < 0.5 ? FULL_DAY_HOURS : PART_TIME_HOURS;
    let dailyWage = workHours * WAGE_PER_HOUR;

    // Store day and daily wage in the Map
    dayWiseWageMap.set(day, dailyWage);

    // Add to total wage
    totalWage += dailyWage;
}

// a. Display Day-wise Wage using Map
console.log("Day-wise Wage Map:");
dayWiseWageMap.forEach(function (wage, day) {
    console.log("Day", day, "-> Wage:", wage);
});

// b. Compute total wage using Map
let totalWageFromMap = 0;
dayWiseWageMap.forEach(function (wage) {
    totalWageFromMap += wage;
});
console.log("Total Wage using Map:", totalWageFromMap);
  