/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

    for (let i = 1; i < table.rows.length; i++) {

       let addStatusClass = function() {
            let statusRow = table.rows[i].cells[3];

            if (statusRow.dataset.available === 'true') {
                table.rows[i].classList.add('available');
            } else if (statusRow.dataset.available === 'false'){
                table.rows[i].classList.add('unavailable');
            } else {
                table.rows[i].setAttribute('hidden', `Lok'tar Ogar`);
            }    
        };

        let addGenderClass = function() {
            let genderRow = table.rows[i].cells[2];

            if (genderRow.innerHTML === 'm') {
                table.rows[i].classList.add('male');
            } else if (genderRow.innerHTML === 'f') {
                table.rows[i].classList.add('female');
            }
        };

        let addAgeStyle = function() {
            let ageRow = table.rows[i].cells[1];

            if (ageRow.innerHTML < 18) {
                table.rows[i].style.textDecoration = 'line-through';
            }
        };

        addStatusClass();
        addGenderClass();
        addAgeStyle();
    }    
}
