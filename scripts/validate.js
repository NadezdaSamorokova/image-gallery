//объект с классами и селекторами
const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
};

//функция слушатель валидации всех форм в проекте
function enableValidation (config) {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    
    forms.forEach(addListenersToForm);
}

//функция слушатель всех полей ввода в проекте
function addListenersToForm(form) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));

    inputs.forEach(addListenersToInput);

    form.addEventListener('input', handleFormInput);
    setSubmitButtonState(form);
}

//проверка формы на валидность
function handleFormInput (evt) {
    const form = evt.currentTarget;
    setSubmitButtonState(form);
}

// Функция добавления и удаления ошибки в полях ввода
function setSubmitButtonState (form) {
    const button = form.querySelector(config.submitButtonSelector);
    button.disabled = !form.checkValidity();
    button.classList.toggle(config.inactiveButtonClass, !form.checkValidity());
}

//функция слушатель для поля ввода
function addListenersToInput(input) {
    input.addEventListener('input', handleFieldValidation);
}

//функция проверки поя ввода на ошибки
function handleFieldValidation (evt) {
    const element = evt.target;
    element.setCustomValidity('');
    const errorContainer = document.querySelector(`#${element.id}-error`);

    //вызовы функций валидации параметров вводимой информации
    validateLength(element);
    validateRequired(element);
    validateLink(element);

    errorContainer.textContent = element.validationMessage;

    //навешивание/снятие сообщения об ошибке 
    element.classList.toggle(config.inputErrorClass, !element.validity.valid); 
    errorContainer.classList.toggle(config.errorClass, !element.validity.valid)
}

//функция валидации длинны вводимой информации
function validateLength(inputElement) {
    if (inputElement.validity.tooShort || inputElement.validity.tooLong) {
        inputElement.setCustomValidity('Минимальное количество символов: 2. Длина текста сейчас: 1 символ');
    }
}

//функция валидации необходимости вводимой информации
function validateRequired(inputElement) {
    if (inputElement.validity.valueMissing) {
        inputElement.setCustomValidity('Вы пропустили это поле');
    }
}

//функция валидации типа вводимой информации
function validateLink(inputElement) {
    if (inputElement.type === 'url' && inputElement.validity.typeMismatch) {
        inputElement.setCustomValidity('Введите адрес сайта');
    }
}

//вызов функции валидации всех фрм проекта
enableValidation(config);