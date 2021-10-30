/*const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
};*/

function enableValidation () {
    const form = document.querySelector('.popup__form');

    form.addEventListener('submit', handleFormSubmit);
    form.addEventListener('input', handleFormInput);
};

    /*const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(addListenersToForm);*/


/*function addListenersToForm(form) {
    const inputs = Array.from(form.querySelectorAll('.popup__input'));

    inputs.forEach(addListenersToInput);

    form.addEventListener('submit', handleFormSubmit);
    form.addEventListener('input', handleFormInput);

    setSubmitButtonState(form);
};*/

function handleFormSubmit (evt) {
    evt.preventDefault();

    const form = evt.currentTarget;
    const input = evt.target;
    const isValid = form.checkValidity();
    if (!isValid) {
        input.classList.add('popup__input_error');
        span.classList.add('popup__error_visible');
        span.textContent = input.validationMessage;
    } else {
        input.classList.remove('popup__input_error');
        span.classList.remove('popup__error_visible');
        span.textContent = '';
    }
};


function handleFormInput (evt) {
    const input = evt.target;
    const form = evt.currentTarget;

    setCustomError(input);
    setFieldError(input);
    setSubmitButtonState(form);
};

function setCustomError (input) {
    const validity = input.validity;

    input.setCustomValidity('');

    if (validity.valueMissing) {
        input.setCustomValidity('Вы пропустили это поле');
    }
  
    if (validity.tooShort || validity.tooLong) {
        input.setCustomValidity('Вы пропустили это поле');
    }
  
    if (input.type === 'url' && validity.typeMismatch) {
        input.setCustomValidity('Введите адрес сайта');
    }
}

function setFieldError (input) {
    const span = document.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
};

function setSubmitButtonState(form) {
    const button = form.querySelector('.popup__submit-button');
    const isValid = form.checkValidity();
    if (!isValid) {
        button.classList.add('popup__submit-button_disabled');
        
    } else {
        button.classList.remove('popup__submit-button_disabled');
        
    }
}


enableValidation();





/*const showInputError = (formElem, inputElement, errorMessage) => {
    const formError = formElem.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add('popup__input_error');
    formError.textContent = errorMessage;
    formError.classList.add('popup__error_visible');
};

const hideInputError = (formElem, inputElement) => {
    const formError = formElem.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.remove('popup__input_error');
    formError.classList.remove('popup__error_visible');
    formError.textContent = '';
};

function checkInputValidity (formElem, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(formElem, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElem, inputElement);
    }
};

const setEventListeners = (formElem) => {
    const inputList = Array.from(formElem.querySelectorAll('.popup__input'));
    const buttonElement = formElem.querySelector('.popup__submit-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElem, inputElement);
        });
    });
};

function enableValidation () {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElem) => {
    formElem.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    setEventListeners(formElem);

  });
};



function validateInputs(formError) {

    formError.setCustomValidity('');
  
    if (formError.validity.valueMissing) {
        formError.setCustomValidity('Вы пропустили это поле');
      return false
    }
  
    if (formError.validity.tooShort || formError.validity.tooLong) {
        formError.setCustomValidity('Вы пропустили это поле');
      return false
    }
  
    if (formError.type === 'url' && formError.validity.typeMismatch) {
        formError.setCustomValidity('Введите адрес сайта');
      return false
    }
  
    return formError.checkValidity();
  }

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__submit-button_disabled');
    } else {
        buttonElement.classList.remove('popup__submit-button_disabled');
    }
};

enableValidation();*/