/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // ваш код...
  let m = 1;

  while(n > 1) {
  m = m * n;
  n--;
 }
 return m;
}
