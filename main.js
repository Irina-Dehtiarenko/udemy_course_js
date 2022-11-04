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

// Coding Challenge #1
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  console.log(avgDolphins, avgKoalas);
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) `);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}) `);
  } else {
    console.log("There are no wins");
  }
};

// Data 1
checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));

// Data2

// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
