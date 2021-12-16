//класс с контейнерлм для селекторов валидации
export class FormValidator {
    constructor(config, validateForm) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._validateForm = validateForm;
    }

    //публичный метод класса для осуществления валидации форм
    enableValidation() {
        this._submitButton = this._validateForm.querySelector(this._submitButtonSelector);
        this._inputs = Array.from(this._validateForm.querySelectorAll(this._inputSelector));
        this._setEventListeners();
    }

    //приватный метод проверки валидности поля ввода
    _handleFieldValidation(evt) {
        const element = evt.target;
        element.setCustomValidity('');
        const errorContainer = document.querySelector(`#${element.id}-error`);

        if (element.validity.tooShort || element.validity.tooLong) {
            element.setCustomValidity('Минимальное количество символов: 2. Длина текста сейчас: 1 символ');
        }

        if (element.validity.valueMissing) {
            element.setCustomValidity('Вы пропустили это поле');
        }

        if (element.type === 'url' && element.validity.typeMismatch) {
            element.setCustomValidity('Введите адрес сайта');
        }

        errorContainer.textContent = element.validationMessage;

        element.classList.toggle(this._inputErrorClass, !element.validity.valid); 
        errorContainer.classList.toggle(this._errorClass, !element.validity.valid);
    }
    
    //приватный метод добавления или удаления ошибки для поля ввода
    _setSubmitButtonState() {
        this._submitButton.disabled = !this._validateForm.checkValidity();
        this._submitButton.classList.toggle(this._inactiveButtonClass, !this._validateForm.checkValidity());
   }

    //слушатель для всех полей ввода в проекте
    _setEventListeners() {
        this._setSubmitButtonState();
        
        this._inputs.forEach((input) => {
            input.addEventListener('input', (evt) => {
                this._handleFieldValidation(evt);
                this._setSubmitButtonState();
            });
        });
    };

    //публичный метод очистки ошибок
    resetValidation() {
       this._inputs.forEach(input => {
           this._setSubmitButtonState(input);
       });
    }
}