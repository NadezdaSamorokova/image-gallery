const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
};

function enableValidation () {
    const forms = Array.from(document.querySelectorAll('.popup__form'));
    
    forms.forEach(addListenersToForm);
}

function addListenersToForm(form) {
    const inputs = Array.from(form.querySelectorAll('.popup__input'));

    inputs.forEach(addListenersToInput);







    form.addEventListener('submit', handleSubmit);
    form.addEventListener('input', handleFormInput);
}

function handleFormInput (evt) {
    const form = evt.currentTarget;
    setSubmitButtonState(form);
}

function setSubmitButtonState (form) {
    const button = form.querySelector('.popup__submit-button');
    button.disabled = !form.checkValidity();
    button.classList.toggle('popup__submit-button_disabled', !form.checkValidity());
}

function handleSubmit (evt) {
    evt.preventDefault();
    const form = evt.target;
    const data = Array.from(form.querySelectorAll('.popup__input')).reduce((input)=>{
        sum[input.name] = input.value;
        return sum;
    }, {})

    return data;
}








function addListenersToInput(input) {
    input.addEventListener('input', handleFieldValidation);
}

function handleFieldValidation (evt) {
    const element = evt.target;
    element.setCustomValidity('');
    const errorContainer = document.querySelector(`#${element.id}-error`);

    validateLength(element);
    validateRequired(element);
    validateLink(element);

    errorContainer.textContent = element.validationMessage;

    element.classList.toggle('popup__input_error', !element.validity.valid); 
    errorContainer.classList.toggle('popup__error_visible', !element.validity.valid);
}

function validateLength(inputElement) {
    if (inputElement.validity.tooShort || inputElement.validity.tooLong) {
        inputElement.setCustomValidity('Укажите строку больше 2 и меньше 30 символов');
    }
}

function validateRequired(inputElement) {
    if (inputElement.validity.valueMissing) {
        inputElement.setCustomValidity('Вы пропустили это поле');
    }
}

function validateLink(inputElement) {
    if (inputElement.type === 'url' && inputElement.validity.typeMismatch) {
        inputElement.setCustomValidity('Введите адрес сайта');
    }
}

enableValidation();