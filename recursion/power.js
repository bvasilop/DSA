'use strict';

function calculate(base, exp) {
  if (exp <= 0) return 1;
  return base * calculate(base, (exp - 1));
}

console.log('calc 2^3', calculate(2, 3));
console.log('calc 3^3', calculate(3, 3));