/**
 * @param {string} str
 * @returns {string}
 */


function camelize(str) {
  // ваш код...
  str = str.split('-');
  let anotherArr = [];

  for (let el of str) {
    if ( el === str[0]) {
      anotherArr.push(el);
    } else {
    anotherArr.push(el[0].toUpperCase() + el.slice(1));
    }
  }
  str = anotherArr.join('');
  return str;
}
