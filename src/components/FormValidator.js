//class for a form validations
export default class FormValidator {
    constructor(config, validateForm) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._validateForm = validateForm;
    }

    //public method for performing form validation
    enableValidation() {
        this._submitButton = this._validateForm.querySelector(this._submitButtonSelector);
        this._inputs = Array.from(this._validateForm.querySelectorAll(this._inputSelector));
        this._setEventListeners();
    }

    //private method for checking the validity of the input field
    _handleFieldValidation(evt) {
        const element = evt.target;
        const errorContainer = this._validateForm.querySelector(`#${element.id}-error`);

        errorContainer.textContent = element.validationMessage;

        element.classList.toggle(this._inputErrorClass, !element.validity.valid); 
        element.classList.toggle(this._errorClass, !element.validity.valid);
    }
    
    //private method for adding or removing an error for an input field
    _setSubmitButtonState() {
        this._submitButton.disabled = !this._validateForm.checkValidity();
        this._submitButton.classList.toggle(this._inactiveButtonClass, !this._validateForm.checkValidity());
   }

    //Event listeners for all input fields in the project
    _setEventListeners() {
        this._setSubmitButtonState();
        
        this._inputs.forEach((input) => {
            input.addEventListener('input', (evt) => {
                this._handleFieldValidation(evt);
                this._setSubmitButtonState();
            });
        });
    };

    //public method for clearing errors
    resetValidation() {
        this._setSubmitButtonState();
        
        this._inputs.forEach((inputElement) => {
            const errorInput = this._validateForm.querySelector(`#${inputElement.id}-error`);
            inputElement.classList.remove(this._inputErrorClass);
            errorInput.classList.remove(this._errorClass);
            errorInput.textContent = '';
        });
    }
}