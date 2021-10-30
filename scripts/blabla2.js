const hasInvalidInput = (inputList) => {
    return inputList.some((item) => {
      if (item.validity.valid) {
        return false;
      }
      else {
        return true;
      }
    })
};


//функция добавления класса с ошибкой
const showInputError = (formElement, inputElement, validationElements) => {
    const { inputErrorClass, errorClass } = validationElements;
    /*const { target: element } = evt;
    element.setCustomValidity('');*/

    const errorElement = formElement.querySelector(`#error-${element.id}`);

    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);

    validateInputs(input)

    errorElement.textContent = inputElement.validationMessage;
}

//функция удаления класса с ошибкой
const hideInputError = (formElement, inputElement, validationElements) => {
    const { inputErrorClass, errorClass } = validationElements;
    const errorElement = formElement.querySelector(`#error-${element.id}`);

    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);

    errorElement.textContent = ''
}

function setSubmitButtonState(form) {
    const button = form.querySelector('.popup__submit-button');
    button.disabled = !form.checkValidity();
    button.classList.toggle('popup__submit-button_disabled', !form.checkValidity());
}


//форма валидации
const checkInputValidity = (formElement, inputElement, validationElements) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, validationElements);
    }
    else {
        showInputError(formElement, inputElement, validationElements);
    }
}

//форма валидации отдельных полей ввода
function validateInputs(input) {

    input.setCustomValidity('');
  
    if (input.validity.valueMissing) {
      input.setCustomValidity('Вы пропустили это поле');
      return false
    }
  
    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity('Вы пропустили это поле');
      return false
    }
  
    if (input.type === 'url' && input.validity.typeMismatch) {
      input.setCustomValidity('Введите адрес сайта');
      return false
    }
  
    return input.checkValidity();
  }

const setEventListeners = (formElement, validationElements) => {
    const { inputSelector, submitButtonSelector, ...rest} = validationElements;
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault;
    })

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    setSubmitButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, rest);
            setSubmitButtonState(inputList, buttonElement);
            })
        });
}

const enableValidation = (validationElements) => {
    const { formSelector, ...rest} = validationElements;
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, rest);
    })
};

enableValidation(validationElements);

