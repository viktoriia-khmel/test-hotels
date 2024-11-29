"use strict";

function getComputers(num) {
  const absNum = Math.abs(num);
  const nElevenToFourteen = absNum % 100;
  const nOneToFour = absNum % 10;

  if (nElevenToFourteen >= 11 && nElevenToFourteen <= 14) {
    return `${num} компьютеров`;
  } else if (nOneToFour === 1) {
    return `${num} компьютер`;
  } else if (nOneToFour >= 2 && nOneToFour <= 4) {
    return `${num} компьютера`;
  } else return `${num} компьютеров`;
}

console.log(getComputers(1));
console.log(getComputers(12));
console.log(getComputers(100));
console.log(getComputers(227));
console.log(getComputers(-44));
