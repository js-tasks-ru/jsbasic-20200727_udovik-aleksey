/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...

  //str = str.replace(str[0].toUpperCase());

  if (str == '') {
    return '';
  }
  return str[0].toUpperCase() + str.slice(1);
}
