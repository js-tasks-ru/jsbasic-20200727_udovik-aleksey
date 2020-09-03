import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.createModal();

    // обработчики
    this.modalElement.addEventListener('click', () => this.closeOnX());
    this.closeOnEsc();
  }

  createModal() {
    this.modalElement = document.createElement('div');
    this.modalElement.classList.add('modal');

    const modalHTMLElement = `
    <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">  
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title"></h3>
        </div>
        <div class="modal__body">
        </div>
      </div>
    `;

    this.modalElement.insertAdjacentHTML('afterbegin', modalHTMLElement);
  }

  open() {
    document.body.append(this.modalElement);
    document.body.classList.add('is-modal-open'); 
  }

  setTitle(title) {
    this.modalTitle = this.modalElement.querySelector('.modal__title').innerHTML = title;
  }

  setBody(body) {
    this.modalBody = this.modalElement.querySelector('.modal__body');
    this.modalBody.innerHTML = '';
    this.modalBody.insertAdjacentElement('afterbegin', body);
  }

  closeOnX() {
    if (event.target.closest('.modal__close')) this.close();
  }

  // когда делал по аналогии с "closeOnX()", не проходил npm test
  closeOnEsc() {
    document.body.addEventListener('keydown', () => {
      if (event.code === 'Escape') this.close();
    })
  }
  
  close() {
    this.modalElement.remove();
    document.body.classList.remove('is-modal-open');
  }
}
