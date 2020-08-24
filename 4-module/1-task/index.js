/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul');

  for (let el of friends) {
    let li = document.createElement('li');

    li.innerHTML = el.firstName + ' ' + el.lastName;
    ul.appendChild(li);
  }

  return document.body.appendChild(ul);
}
