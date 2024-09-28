const body = document.querySelector('.body');
const modalBack = document.querySelector('.modal-background');
const btnOpenModal = document.querySelector('#button-open');
const btnCloseModal = document.querySelector('#button-close');

const handleModalSwitch = () => {
  body.classList.toggle('body--scroll-locked');
  modalBack.classList.toggle('modal-background--open-modal');
}

btnOpenModal.addEventListener('click', handleModalSwitch);
btnCloseModal.addEventListener('click', handleModalSwitch);


document.addEventListener('keydown', event => {
    if (event.key === "Escape") 
      modalBack.classList.remove('modal-background--open-modal');
    if (event.key === "Escape")
      body.classList.remove('body--scroll-locked');
  });


