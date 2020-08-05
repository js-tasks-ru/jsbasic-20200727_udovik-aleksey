/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  
  let regexp1 = /1xbet/;
  let regexp2 = /xxx/;
  str = str.toLowerCase();

  if ( str.match(regexp1) || str.match(regexp2) ) {
    return true;
  } else {
    return false;
  }

}
