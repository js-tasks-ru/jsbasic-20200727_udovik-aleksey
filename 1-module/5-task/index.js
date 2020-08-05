/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  // ваш код...
<<<<<<< HEAD
  
=======

>>>>>>> 2369ff50e05d601cc911c5d5f5c7f7cf6f1621e4
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}
