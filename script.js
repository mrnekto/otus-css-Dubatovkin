const body = document.querySelector('.body');
const back = document.querySelector('.popap-bcg');
const btnOpenModal = document.querySelector('#button-open');
const btnCloseModal = document.querySelector('#button-close');

const handleModalSwitch = () => {
  body.classList.toggle('body--scroll-locked');
  back.classList.toggle('popap-bcg--open-modal');
}

btnOpenModal.addEventListener('click', handleModalSwitch);
btnCloseModal.addEventListener('click', handleModalSwitch);


document.addEventListener('keydown', event => {
    if (event.key === "Escape") 
        body.classList.remove('body--scroll-locked');
        back.classList.toggle('popap-bcg--open-modal');
  });


