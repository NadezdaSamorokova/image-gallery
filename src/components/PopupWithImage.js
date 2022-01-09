import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._link = this._popupSelector.querySelector('.popup__image');
        this._name = this._popupSelector.querySelector('.popup__caption');
    }

    open(data) {
        this._link.src = data.link;
        this._link.alt = data.name;
        this._name.textContent = data.name;
        super.open();
    }
}