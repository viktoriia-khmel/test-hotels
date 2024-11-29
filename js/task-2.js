"use strict";

function getCommonDivisors(numbers) {
  function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (i !== num / i) {
          divisors.push(num / i);
        }
      }
    }
    return divisors;
  }

  let commonDivisors = getDivisors(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    commonDivisors = commonDivisors.filter(
      (divisor) => numbers[i] % divisor === 0
    );
  }

  return commonDivisors;
}

// Пример использования
console.log(getCommonDivisors([42, 12, 18, 36]));
console.log(getCommonDivisors([24, 36, 60]));
console.log(getCommonDivisors([17, 34, 51]));
console.log(getCommonDivisors([7, 14, 21]));
console.log(getCommonDivisors([100, 200, 300]));
