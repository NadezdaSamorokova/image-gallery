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
const profileForm = profilePopup.querySelector('.popup__form');
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
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('mousedown', closePopupOverlay);
  document.addEventListener('keydown', closePopupEscape);
}

//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('mousedown', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEscape);
}

// Функция закрытия попапа по оверлею 
const closePopupOverlay = function(evt) {
  if(evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

// Функция закрытия попапа нажатием на Esc
const closePopupEscape = function(evt) {
  if(evt.key === esc) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

//функция изменения иформации в профиле
function editProfilePopup (evt) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
  openPopup(profilePopup);
}

//функция передачи заполненной информации профиля
function editFormSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(profilePopup);
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
  elementImage.addEventListener('click', () => handleCardClick(card))

  return cardElement;
};

//стрелочная функция для добавления карточки
const addCard = (card, cardContainer) => {
  const newCard = renderCard(card);
  cardContainer.prepend(newCard);
}

//присваиваем значения линку и тексту карточки
function handleCardClick(card) {
  imagePopupImage.src = card.link;
  imagePopupImage.alt = card.name;
  imagePopupText.textContent = card.name;
  openPopup(imagePopup);
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

//деактивируем кнопку добавления при открытии формы
  const submitPopupButton = addPopup.querySelector('.popup__submit-button');
  submitPopupButton.classList.add('popup__submit-button_disabled');
  submitPopupButton.setAttribute('disabled', 'disabled');

  addCard(addPopupInput, cardList);
  imageFormElement.reset();
  closePopup(addPopup);
};

//аргумент для перебора масства
initialCards.forEach((newCard) => {
  addCard(newCard, cardList);
});

//слушатели для попапа с изменением имени профиля
openProfilePopup.addEventListener('click', editProfilePopup);
profileForm.addEventListener('submit', editFormSubmitHandler);
closeProfilePopup.addEventListener('click',() => {
  closePopup(profilePopup);
});

//слушатели для попапа с добавлением карточки
openAddPopup.addEventListener('click', () => {
  openPopup(addPopup);
});
imageFormElement.addEventListener('submit', addFormSubmitHandler);
closeAddPopup.addEventListener('click', () => {
  closePopup(addPopup);
});

//слушатель для закрытия попапа с картинкой
closeImagePopup.addEventListener('click', () => {
  closePopup(imagePopup);
});