/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */

let schedule = {};

function isEmpty(obj) {
  // ваш код...

  let prop;

  for (let key in obj) {
    prop = key;
  }

  if ( prop == undefined ) {
    return true;
  }

  return false;
}