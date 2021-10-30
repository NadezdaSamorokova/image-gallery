function enableValidation() {
    const forms = Array.from(document.querySelectorAll('.popup__form'));
    
    forms.forEach(addListenersToForm);
}

enableValidation();

function addListenersToForm(form) {
    const inputs = Array.from(form.querySelectorAll('.popup__input'));
    inputs.forEach(addListenersToInput);

    form.addEventListener('submit', handleSubmit);
    form.addEventListener('input', handleFormInput);

    setSubmitButtonState(form);
}

function handleFormInput(evt) {
    const input = evt.target;
    const form = evt.currentTarget;

    /*const {
        currentTarget: form,
        target: {
            validity: { valid },
        },
    } = evt;

    setSubmitButtonState(form);*/

}



function handleSubmit(evt) {
    evt.preventDefault();

    const form = evt.currentTarget;
    const isValid = form.checkValidity();
    if (isValid) {
        return true;
    } else {
        return false;
    }

    const { target: form } = evt;
    const data = Array.from(form.querySelectorAll('.popup__input')).reduce(
        (sum, input) => ({
        ...sum,
        [input.name]: input.value,
      }),
      {},
    );

    return data;
}


function addListenersToInput(input) {
    input.addEventListener('input', handleFieldValidation);
}

function handleFieldValidation(evt) {
    const { target: element } = evt;
    element.setCustomValidity('');

    const errorElement = document.querySelector(`#error-${element.id}`);

    validateLength(element);
    validateLink(element);

    errorElement.textContent = element.validationMessage;

    element.classList.toggle('popup__input_error', !element.validity.valid);
}



function validateLength(inputElement) {
    if (inputElement.validity.valueMissing || inputElement.validity.tooLong) {
        inputElement.classList.add('popup__error');
        inputElement.setCustomValidity('Вы пропустили это поле');
    }
}


function validateLink(inputElement) {
    if (inputElement.type === 'url' && inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity('Введите адрес сайта');
    }
}


function validateInputs(input) {

    input.setCustomValidity("");
  
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

  //функция для деактивации и активации кнопки подачи формы
function setSubmitButtonState(form) {
    const button = form.querySelector('.popup__submit-button');
    button.disabled = !form.checkValidity();
    button.classList.toggle('popup__submit-button_disabled', !form.checkValidity());
}


//prodolzenie



init ();

function init () {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach(addListenersToForm);
} 

function addListenersToForm(form) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));

    inputs.forEach(inputValid);

    form.addEventListener('submit', handleSubmit);
    form.addEventListener('input', handleFormInput);

    setSubmitButtonState(form);
}

function addListenersToInput(input) {
    input.addEventListener('input', validateInputs);
}


function validateInputs(input) {

    input.setCustomValidity("");
  
    if (input.validity.valueMissing) {
      input.setCustomValidity('Вы пропустили это поле');
      return false
    }
  
  
    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity('Вы пропустили это поле');
      return false
    }
  
    if (input.type === 'url' &&  input.validity.typeMismatch) {
      input.setCustomValidity('Введите адрес сайта');
      return false
    }
  
    return input.checkValidity();
  }

  function inputValid(input) {
    const errorElement = document.querySelector(`#error-${input.id}`);
    const valid = inputValid(input);
    errorElement.textContent = input.validationMessage;
    return valid;
  }

  function deleteErrors(popup) {
    const errorElements = popup.querySelectorAll('.popup__error');
    errorElements.forEach((span) => { span.textContent = '' });
  }

  function handlerInputForm(evt) {
    const currentForm = evt.currentTarget;
    /*const submit = evt.currentTarget.querySelector('.button');*/
  
    inputValid(evt.target);
    if (currentForm.checkValidity()) {
      setSubmitButtonState(button, true)
    } else {
      setSubmitButtonState(button, false)
    }
  }


  function setSubmitButtonState(form) {
    const button = form.querySelector(config.submitButtonSelector);

    button.disabled = !form.checkValidity();
    button.classList.toggle('popup__button_invalid', !form.checkValidity());
}