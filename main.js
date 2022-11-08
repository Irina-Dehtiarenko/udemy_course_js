'use strict';

// Challenge #1

// let markWeight = 78;
// let markTall = 1.69;
// let johnWeight = 92;
// let johnTall = 1.95;

// let markWeight = 95;
// let markTall = 1.88;
// let johnWeight = 85;
// let johnTall = 1.76;

// const markBMI = markWeight / markTall ** 2;
// const markBMI2 = Math.floor(markWeight / (markTall * markTall));
// const johnBMI = johnWeight / johnTall ** 2;
// const johnBMI2 = Math.floor(johnWeight / (johnTall * johnTall));
// const markHigherBMI = markBMI2 > johnBMI2;

// console.log(markBMI);
// console.log(markBMI2);

// console.log(johnBMI);
// console.log(johnBMI2);

// console.log(markHigherBMI);

// const coś = "🤦‍♂️🤦‍♀️🤦‍♀️";
// console.log(coś);

// Challenge #3

/* Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */

// const minimumScore = 100;
// const dolphinsScoreAvegage = (96 + 108 + 89) / 3;
// const koalasScoreAverage = (88 + 91 + 110) / 3;

// const dolphinsScoreAvegage = (97 + 112 + 101) / 3;
// const koalasScoreAverage = (109 + 95 + 123) / 3;

// const dolphinsScoreAvegage = (97 + 112 + 101) / 3;
// const koalasScoreAverage = (109 + 95 + 106) / 3;

// console.log(dolphinsScoreAvegage, koalasScoreAverage);

// Solution 1

// if (dolphinsScoreAvegage > koalasScoreAverage) {
//   console.log("Dolphins are winners");
// } else if (dolphinsScoreAvegage === koalasScoreAverage) {
//   console.log("We have a draw");
// } else {
//   console.log("Koalas are winners");
// }

// bonus 1

// if (
//   dolphinsScoreAvegage > koalasScoreAverage &&
//   dolphinsScoreAvegage >= minimumScore
// ) {
//   console.log("Dolphins are winners");
// } else if (
//   koalasScoreAverage > dolphinsScoreAvegage &&
//   koalasScoreAverage >= minimumScore
// ) {
//   console.log("Koalas are winners");
// } else if (
//   dolphinsScoreAvegage === koalasScoreAverage &&
//   dolphinsScoreAvegage >= minimumScore &&
//   koalasScoreAverage >= minimumScore
// ) {
//   console.log("We have a draw");
// } else {
//   console.log("not one is a winner");
// }

// Challenge #4

// const bill = 275;
// const bill = 40;
// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// JavaScript Fundamentals – Part 2

// // Coding Challenge #1
// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const checkWinner = (avgDolphins, avgKoalas) => {
//   console.log(avgDolphins, avgKoalas);
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) `);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}) `);
//   } else {
//     console.log("There are no wins");
//   }
// };

// // Data 1
// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));

// Data2

// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

// Challenge #2

// const bill = 275;
// const bill = 40;
// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);

// New  challenge

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtman",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriverLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license `;
//   },
// };

// console.log(jonas.getSummary());

// coding Chaallenge #3

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// const mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//     // return this.weight / this.height ** 2;
//   },
// };

// const john = {
// fullName: 'John Smith',
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//     // return this.weight / this.height ** 2;
//   },
// };
// mark.calcBMI();
// john.calcBMI();

// console.log(
//   `${
//     mark.bmi > john.bmi
//       ? `${mark.fullName}'s BMI (${mark.bmi}) is highter than ${john.fullName}'s (${john.bmi}) !`
//       : `${john.fullName}'s BMI (${john.bmi}) is highter than ${mark.fullName}'s (${mark.bmi}) !`
//   } `
// );

// console.log(mark);

// Coding challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];
// const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// for (let i = 0; i < bills.length; i++) {
//   // tak też działa
//   // tips[i] = calcTip(bills[i]);

//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);

//   // console.log(tips);
//   // console.log(totals);
// }

// // Bonus
// const calcAverage = arr => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// znalezienie max-value and min-value on the array:

const temperature = [9, 15, 0, 1, 'error', 2, 5, 9, 10, -5, 89];

const calcTempAmplitude = temps => {
  let max = temps[0];
  let min = temps[0];
  temps;
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    } else if (temps[i] < min) {
      min = temps[i];
    }

    console.log(min, max);
  }
};

calcTempAmplitude(temperature);
