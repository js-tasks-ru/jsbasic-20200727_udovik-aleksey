/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.createTable(rows);
    this.elem.addEventListener('click', (event) => this.removeRow(event));
  }

  createTable(rows) {
    let myTable = document.createElement('table');
    let myThead = `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    `;
    let myTbody = document.createElement('tbody');

    myTable.insertAdjacentHTML('afterbegin', myThead);

    for (let el of rows) {
      let row = `
        <tr>
          <td>${el.name}</td>
          <td>${el.age}</td>
          <td>${el.salary}</td>
          <td>${el.city}</td>
          <td><button>X</button>
          </td>
        </tr>
      `;

      myTbody.insertAdjacentHTML('beforeend', row);
    }

    myTable.append(myTbody);
    return myTable;
  }

  removeRow(event) { 
    
    if (event.target.innerText === 'X') {
      event.path[2].remove();
    }
  } 
}
