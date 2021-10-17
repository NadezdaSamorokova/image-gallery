const popup = document.querySelector('.popup'); //основной попап

//переменнные для попапа с изменением имени профиля
const profilePopup = document.querySelector('.popup_type_edit');
const openProfilePopup = document.querySelector('.profile-info__edit-button');
const closeProfilePopup = profilePopup.querySelector('.popup__close-icon');
const formElement = profilePopup.querySelector('.popup__form');
const nameInput = profilePopup.querySelector('.popup__name');
const jobInput = profilePopup.querySelector('.popup__occupation');
const profileName = document.querySelector('.profile-info__name');
const profileOccupation = document.querySelector('.profile-info__occupation');

//функция открытия попапа
function popupOpened(popup) {
  popup.classList.add('popup_opened');
}

//функция закрытия попапа
function popupClosed(popup) {
  popup.classList.remove('popup_opened');
}

//функция изменения иформации в профиле
function editProfilePopup (evt) {
  evt.preventDefault();
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
  profilePopup.classList.toggle('popup_opened');
}

//функция передачи заполненной информации профиля
function editFormSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  profilePopup.classList.toggle('popup_opened');
}

//слушатели для для попапа с изменением имени профиля
openProfilePopup.addEventListener('click', editProfilePopup);
formElement.addEventListener('submit', editFormSubmitHandler);
closeProfilePopup.addEventListener('click',() => {
  popupClosed(profilePopup);
});


//переменнные для попапа с добавлением карточки
const addPopup = document.querySelector('.popup_type_add');
const openAddPopup = document.querySelector('.profile__add-button');
const closeAddPopup = addPopup.querySelector('.popup__close-icon');
/*const addPopupTitleInput = addPopup.querySelector('.popup__title-text');*/
/*const addPopupLinkInput = addPopup.querySelector('.popup__link');*/
/*const elementImage = elementTemplate.querySelector('.element__image');*/
/*const elementTitle = elementTemplate.querySelector('.element__title');*/
/*const imageElement = elementTemplate.querySelector('.element').cloneNode('true');*/
/*const elementButtonlike = elementTemplate.querySelector('.element__button-like');*/
/*const elementButtonDelete = elementTemplate.querySelector('.element__button-delete');*/
/*const imageFormElement = addPopup.querySelector('.popup__form');*/


//массив картинок
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 



//переменнные для создания карточек
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupText = imagePopup.querySelector('.popup__caption');
const closeImagePopup = imagePopup.querySelector('.popup__close-icon');

//переменные для темплейта
const elementList = document.querySelector('.elements__list');

const cardContainer = document.querySelector('.elements__list');
const imageFormElement = addPopup.querySelector('.popup__form');
const elementTemplate = document.querySelector('#element-template').content;

const renderCard = (card) => {
  const imageElement = elementTemplate.cloneNode('true');
  const elementImage = elementTemplate.querySelector('.element__image');
  elementImage.textContent = card.link;
  const elementTitle = elementTemplate.querySelector('.element__title');
  elementTitle.textContent = card.name;

  /*const elementLikeButton = elementTemplate.querySelector('.element__button-like');
  elementLikeButton.addEventListener('click', () => {
    evt.currentTarget.classList.toggle('element__button-heart_active');
  });

  const elementButtonDelete = elementTemplate.querySelector('.element__button-delete');
  elementButtonDelete.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });*/

  cardContainer.prepend(imageElement);
};

initialCards.forEach(renderCard);

const addCard = (evt) => {
  evt.preventDefault();
  
  const addPopupTitleInput = evt.target.querySelector('.popup__title-text');
  const addPopupLinkInput = evt.target.querySelector('.popup__link');

  const cardData = {
    name: addPopupTitleInput.value,
    link: addPopupLinkInput.value
  };

  renderCard(cardData);

  addPopupTitleInput.value = '';
  addPopupLinkInput.value = '';
};

imageFormElement.addEventListener('submit', addCard);