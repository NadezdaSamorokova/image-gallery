//класс вызова карточки
export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }
 
    //заполняем шаблон
    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content.querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    //обработчик лайка
    _handleCardLike() {
        this._likeButton.classList.toggle('element__button-like_active');
    }

    //удаляем карточку при необходимости
    _deleteCard() {
        this._element.remove();
    }

    //навешиваем слушатели открытие попапа с карточкой, лайк и удаление карточки
    _setEventListeners() {
        this._elementImage.addEventListener('click', this._handleCardClick);
        
        this._element.querySelector('.element__button-delete').addEventListener('click', () => {
            this._deleteCard();
        });
        this._likeButton.addEventListener('click', () => {
            this._handleCardLike();
        });
    }

    //публичный метод пересоздания карточки
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