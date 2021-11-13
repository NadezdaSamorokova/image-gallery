//массив с карточками
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

//переменнные для попапа с изменением имени профиля
const profilePopup = document.querySelector('.popup_type_edit');
const openProfilePopup = document.querySelector('.profile-info__edit-button');
const closeProfilePopup = profilePopup.querySelector('.popup__close-icon');
const formElement = profilePopup.querySelector('.popup__form');
const nameInput = profilePopup.querySelector('.popup__name');
const jobInput = profilePopup.querySelector('.popup__occupation');
const profileName = document.querySelector('.profile-info__name');
const profileOccupation = document.querySelector('.profile-info__occupation');
//переменнные для попапа с добавлением картинки
const addPopup = document.querySelector('.popup_type_add');
const closeAddPopup = addPopup.querySelector('.popup__close-icon');
const imageFormElement = addPopup.querySelector('.popup__form');
const cardList = document.querySelector('.elements__list');
const openAddPopup = document.querySelector('.profile__add-button');
const addPopupTitleInput = addPopup.querySelector('.popup__title-text');
const addPopupLinkInput = addPopup.querySelector('.popup__link');
//акпкменные для попапа с открытием картинки
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupText = imagePopup.querySelector('.popup__caption');
const closeImagePopup = imagePopup.querySelector('.popup__close-icon');

const cardTemplate = document.querySelector('#element-template').content.querySelector('.element');
const esc = 'Escape';


//функция открытия попапа 
function popupOpened(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('mousedown', closePopupOverlay);
  document.addEventListener('keydown', closePopupEscape);
}

//функция закрытия попапа
function popupClosed(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('mousedown', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEscape);
}

// Функция закрытия попапа по оверлею 
const closePopupOverlay = function(evt) {
  const popupOpened = document.querySelector('.popup_opened');
      if(evt.target === popupOpened) {
        popupClosed(popupOpened);
      }
}

// Функция закрытия попапа нажатием на Esc
const closePopupEscape = function(evt) {
  if(evt.key === esc) {
    const popupOpened = document.querySelector('.popup_opened');
    popupClosed(popupOpened);
  }
}

//функция изменения иформации в профиле
function editProfilePopup (evt) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
  popupOpened(profilePopup);
}

//функция передачи заполненной информации профиля
function editFormSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  popupClosed(profilePopup);
}

//функция для воспроизведения карточки
function renderCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementTitle = cardElement.querySelector('.element__title');
  elementImage.src = card.link;
  elementImage.alt = card.name;
  elementTitle.textContent = card.name;

  //слушатель для лайка карточки
  cardElement.addEventListener('click', likeCard);
  //слушатель для удаления карточки
  cardElement.addEventListener('click', deleteCard);
  //слушатель для открытия попапа с картинкой
  elementImage.addEventListener('click', cardData);

  return cardElement;
};

//стрелочная функция для добавления карточки
const addCard = (card, cardContainer) => {
  const newCard = renderCard(card);
  cardContainer.prepend(newCard);
}

//присваиваем значения линку и тексту карточки
function cardData () {
  imagePopupImage.src = card.link;
  imagePopupImage.alt = card.name;
  imagePopupText.textContent = card.name;
  popupOpened(imagePopup);
};

//функция лайка карточки
function likeCard (evt) {
  if (evt.target.classList.contains('element__button-like')) {
    evt.target.classList.toggle('element__button-like_active')
  }
}

//функция удаления карточки
function deleteCard (evt) {
  evt.preventDefault();
  const card = evt.currentTarget;
  if (evt.target.classList.contains('element__button-delete')) {
    card.removeEventListener('click', deleteCard);
    card.removeEventListener('click', likeCard);
    card.remove();
  }
}

//функция передачи заполненной информации для добавления новой карточки
function addFormSubmitHandler (evt) {
  evt.preventDefault();
  const addPopupInput = {
    link: addPopupLinkInput.value,
    name: addPopupTitleInput.value
  };

  addCard(addPopupInput, cardList);
  imageFormElement.reset();
  popupClosed(addPopup);
};

//аргумент для перебора масства
initialCards.forEach((newCard) => {
  addCard(newCard, cardList);
});

//слушатели для для попапа с изменением имени профиля
openProfilePopup.addEventListener('click', editProfilePopup);
formElement.addEventListener('submit', editFormSubmitHandler);
closeProfilePopup.addEventListener('click',() => {
  popupClosed(profilePopup);
});

//слушатели для для попапа с добавлением карточки
openAddPopup.addEventListener('click', () => {
  popupOpened(addPopup);
});
imageFormElement.addEventListener('submit', addFormSubmitHandler);
closeAddPopup.addEventListener('click', () => {
  popupClosed(addPopup);
});

//слушатель для закрытия попапа с картинкой
closeImagePopup.addEventListener('click', () => {
  popupClosed(imagePopup);
});