/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(users, age) {
  // ваш код...

  let arr = [];
  let str = '';

  for (let el of users) {
    if ( el.age <= age) {
      arr.push(el.name + ', ' + el.balance);
    }
  }
  
  for (let i = 0; i < arr.length; i++) {

    if (i === arr.length - 1) {
      str += arr[i];
    } else {
      str += arr[i] + '\n';
    }
  }

  return str;
}
