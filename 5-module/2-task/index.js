function toggleText() {
  // ваш код...

  let button = document.querySelector('.toggle-text-button');
  let div = document.querySelector('#text');

  button.addEventListener('click', function() {
    if (div.getAttribute('hidden') === 'hide') {
      div.removeAttribute('hidden', 'hide');
    } else {
    div.setAttribute('hidden', 'hide');
    } 
  })
}
