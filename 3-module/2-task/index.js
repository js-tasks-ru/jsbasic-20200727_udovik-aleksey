/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  // ваш код...

  let result = [];

  for (let  el of arr) {

    if (el >=a && el <=b) {
      result.push(el);
    }
  }
  return result;
}
