import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._form.querySelectorAll('.popup__input');
        this._button = this._form.querySelector('.popup__submit-button');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputs.forEach(input => {
            this._inputValues[input.name] = input.value
        });  
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            this.showLoadingStatus(true)
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    showLoadingStatus(isLoading, buttonText='Save') {
        if(isLoading) {
            this._button.textContent = 'Saving...';
        } else {
            this._button.textContent = buttonText;
        }
    }
}