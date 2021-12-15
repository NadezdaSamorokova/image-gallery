import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js'

export {openPopup, closePopup};

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

//объект с классами и селекторами для валидации
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error_visible'
};

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

//аргумент для перебора масства карточек
initialCards.forEach(function (item) {
  addCard(item.name, item.link);
});

//стрелочная функция для добавления карточки
function addCard(name, link) { 
  const newCard = new Card ('#element-template', name, link);
  cardList.prepend(newCard.renderCard());
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

  addCard(addPopupInput.name, addPopupInput.link);
  imageFormElement.reset();
  closePopup(addPopup);
};

//Валидация
const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    const validateForm = new FormValidator (config, form);
    validateForm.enableValidation();
  })
}



 
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

enableValidation(config);