enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
  });

  function init() {
    const forms = Array.from(document.querySelectorAll('.popup__form'));
  
    forms.forEach((form) => {
        const inputs = Array.from(form.querySelectorAll('.popup__input'));
  
        inputs.forEach((input) => {
            input.addEventListener('input', (evt) => {
                const element = evt.target;
                const errorElement = document.querySelector(`#error-${element.id}`);
                errorElement.textContent = 'Вы пропустили это поле';
            })
        })
    })
  
  }
  
  init();