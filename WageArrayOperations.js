const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const WORKING_DAYS = 20;

let dailyWages = [];
let totalWage = 0;

// Generate daily wages for 20 days
for (let day = 1; day <= WORKING_DAYS; day++) {
    let workHours = Math.random() < 0.5 ? FULL_DAY_HOURS : PART_TIME_HOURS;
    let dailyWage = workHours * WAGE_PER_HOUR;
    dailyWages.push({ day: day, hours: workHours, wage: dailyWage });
    totalWage += dailyWage;
}

console.log("Daily Wages:", dailyWages);

// a. ✅ Calc total Wage using forEach or reduce
let totalWageUsingReduce = dailyWages.reduce(function (acc, curr) {
    return acc + curr.wage;
}, 0);
console.log("Total Wage using reduce:", totalWageUsingReduce);

// b. ✅ Show the Day along with Daily Wage using map
let dayWiseWages = dailyWages.map(function (dayInfo) {
    return "Day " + dayInfo.day + " -> Wage: " + dayInfo.wage;
});
console.log("Day-wise Wages:", dayWiseWages);

// c. ✅ Show Days when Full-time wage of 160 was earned using filter
let fullTimeDays = dailyWages.filter(function (dayInfo) {
    return dayInfo.wage === 160;
});
console.log("Days with Full-time Wage of 160:", fullTimeDays.map(function (day) {
    return "Day " + day.day;
}));

// d. ✅ Find the first occurrence when Full Time Wage was earned using find
let firstFullTimeDay = dailyWages.find(function (dayInfo) {
    return dayInfo.wage === 160;
});
console.log("First day Full-time Wage was earned:", firstFullTimeDay ? "Day " + firstFullTimeDay.day : "No Full-time Wage earned");

// e. ✅ Check if Every Element of Full Time Wage is truly holding Full-time wage
let isEveryFullTime = dailyWages.every(function (dayInfo) {
    return dayInfo.wage === 160;
});
console.log("Is every element Full-time Wage? ", isEveryFullTime);

// f. ✅ Check if there is any Part Time Wage
let hasPartTime = dailyWages.some(function (dayInfo) {
    return dayInfo.wage === 80;
});
console.log("Is there any Part-time Wage? ", hasPartTime);

// g. ✅ Find the number of days the Employee Worked
let daysWorked = dailyWages.filter(function (dayInfo) {
    return dayInfo.wage > 0;
}).length;
console.log("Number of days Employee Worked:", daysWorked);

