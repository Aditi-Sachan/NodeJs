let sum = 0;
for (let i = 0; i < 5; i++) {
    let randomValue = Math.floor(Math.random() * 90) + 10;
    sum += randomValue;
}
let average = sum / 5;
console.log("Sum:", sum);
console.log("Average:", average);
