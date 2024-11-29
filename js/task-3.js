"use strict";

function getPrimeNumbersInRange(start, end) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const min = Math.min(start, end);
  const max = Math.max(start, end);

  
  const primes = [];
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}


console.log(getPrimeNumbersInRange(11, 20)); // [11, 13, 17, 19]
console.log(getPrimeNumbersInRange(1, 10)); // [2, 3, 5, 7]
console.log(getPrimeNumbersInRange(20, 11)); // [11, 13, 17, 19]
console.log(getPrimeNumbersInRange(50, 60)); // [53, 59]
