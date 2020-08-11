/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {
  // ваш код...
  let arr = [];
  let numArr = [];
  let result = {
    min: 0,
    max: 1,
  };

  arr = str.split(/[^-^.\d]/g);
  
  for (let el of arr) {
  
    if (+el !== 0) {
      numArr.push(+el);
    }
  }

  result.min = Math.min(...numArr);
  result.max = Math.max(...numArr);
  return result;
}
