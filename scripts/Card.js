import {openPopup, closePopup} from './index.js';

export {Card};

//переменные для попапа с открытием картинки
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupText = imagePopup.querySelector('.popup__caption');
const closeImagePopup = imagePopup.querySelector('.popup__close-icon');

class Card {
    constructor(cardSelector, name, link) {
        this._cardSelector = cardSelector;
        this._name = name;
        this._link = link
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content.querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    _openPopup() {
        openPopup(imagePopup);
        imagePopupImage.src = this._link;
        imagePopupImage.alt = this._name;
        imagePopupText.textContent = this._name;
        closeImagePopup.addEventListener('click', () => {
            closePopup(imagePopup);
          });
    }

    _deleteCard() {
        this._element.remove();
    }

    _handleCardLike() {
      this._likeButton.classList.toggle('element__button-like_active');
    }

    _setEventListeners() {
      this._elementImage.addEventListener('click', () => {
            this._openPopup();
        })
        this._element.querySelector('.element__button-delete').addEventListener('click', () => {
            this._deleteCard();
        })
        this._likeButton.addEventListener('click', () => {
            this._handleCardLike();
        })
    }

    renderCard() {
        this._element = this._getTemplate();

        this._elementImage = this._element.querySelector('.element__image');
        this._elementTitle = this._element.querySelector('.element__title');
        this._likeButton = this._element.querySelector('.element__button-like');

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementTitle.textContent = this._name;

        this._setEventListeners();

        return this._element;
    }
}