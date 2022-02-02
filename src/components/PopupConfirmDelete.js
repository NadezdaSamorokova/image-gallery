import Popup from './Popup.js';

export default class PopupConfirmDelete extends Popup {
    constructor(popupSelector, {handleSubmitDelete}) {
        super(popupSelector);
        this._handleSubmitDelete = handleSubmitDelete;
        this._form = this._popup.querySelector('.popup__form');
        this._confirmButton = this._form.querySelector('.popup__submit-button');
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            this.showLoadingStatus(true)
            evt.preventDefault();
            this._handleSubmitDelete(this._idCard, this._cardElement);
        });
    }

    getCard(id, element) {
        this._clear();
        this._idCard = id;
        this._cardElement = element;
    }

    _clear(){
        this._idCard = '';
        this._cardElement ='';
      }

    showLoadingStatus(isLoading, buttonText='Да') {
        if(isLoading) {
            this._confirmButton.textContent = 'Удаление...';
        } else {
            this._confirmButton.textContent = buttonText;
        }
    }
}