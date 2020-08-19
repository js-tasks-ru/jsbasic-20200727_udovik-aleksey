function hideSelf() {
  // ваш код...

  let hideButton = document.querySelector('.hide-self-button');

  console.log(hideButton);

  hideButton.addEventListener('click', function(){
    hideButton.setAttribute('hidden', '');
  })
}
