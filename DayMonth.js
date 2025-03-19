let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

let isValid = (month === 3 && day >= 20 && day <= 31) ||
              (month === 4 && day >= 1 && day <= 30) ||
              (month === 5 && day >= 1 && day <= 31) ||
              (month === 6 && day >= 1 && day <= 20);

console.log(isValid);
