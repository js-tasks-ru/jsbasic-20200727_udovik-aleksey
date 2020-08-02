/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  
  str = str.toLowerCase();

  if ( str.indexOf('1xbet') || str.mindexOf('xxx') ) {
    return true;
  } else {
    return false;
  }

}
