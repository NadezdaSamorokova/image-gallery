//Card class
export default class Card {
    constructor({data, handleCardClick, userId, handleDeleteCard, handleCardLike}, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._cardUserId = data.owner._id;
        this._user = userId;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteCard;
        this._handleCardLike = handleCardLike;
    }
 
    //fill out the template
    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content.querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    //Attaching event listeners for opening a popup with a card, liking, and deleting the card
    _setEventListeners() {
        this._elementImage.addEventListener('click', () => {
            this._handleCardClick();
        });
        
        if(this._user === this._cardUserId) {
            this._deleteButton.addEventListener('click', () => {
                this._handleDeleteCard(this._id, this._element);
            });
        }

        this._likeButton.addEventListener('click', () => {
            if(!this._likeButton.classList.contains('element__button-like_active'))  {
                this._handleCardLike.handleSetLike(this._id);
            } else {
                this._handleCardLike.handleDeleteLike(this._id);
            };
        });
    }

    //public method for card recreation
    renderCard() {
        this._element = this._getTemplate();

        this._elementImage = this._element.querySelector('.element__image');
        this._elementTitle = this._element.querySelector('.element__title');
        this._likeButton = this._element.querySelector('.element__button-like');
        this._deleteButton = this._element.querySelector('.element__button-delete');
        

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementTitle.textContent = this._name;

        this._setEventListeners();
        this._handleLike();

        if(this._user !== this._cardUserId) {
            this._deleteButton.remove();
        }

        return this._element;
    }

    //manageing likes
    _handleLike() {
        if(this._likes.length !== 0) {
            this._element.querySelector('.element__like-counter').textContent = this._likes.length;
        } else {
            this._element.querySelector('.element__like-counter').textContent = '0';
        }
        this._likes.forEach((like) => {
            if(like._id === this._user) {
                this._likeButton.classList.add('element__button-like_active');
            }
        })
    }

    updateLikes(likes) {
        this._likeButton.classList.toggle('element__button-like_active');
        if(likes !== 0) {
            this._element.querySelector('.element__like-counter').textContent = likes;
        } else {
            this._element.querySelector('.element__like-counter').textContent = '0';
        }
    }
}