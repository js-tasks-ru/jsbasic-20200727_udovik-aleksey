/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {

    for (let i = 0; i < 5; i++) {
        table.rows[i].cells[i].style.backgroundColor = 'red';
    }

    //  Второй вариант мне кажется более лаконичным, но npm test он не прошел

    // let td = document.querySelectorAll('td');

    // td.forEach( function (elem, index) {

    //     if (index % 6) {        
    //     } else {
    //         elem.style.backgroundColor = 'red';
    //     }
    // }); 
}
