import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, config } from '../utils/Array.js';
import '../pages/index.css';

//переменнные для попапа с изменением имени профиля
const profilePopup = document.querySelector('.popup_type_edit');
const openProfilePopup = document.querySelector('.profile-info__edit-button');
const profileForm = profilePopup.querySelector('.popup__form');
const nameInput = profilePopup.querySelector('.popup__name');
const jobInput = profilePopup.querySelector('.popup__occupation');
const profileName = document.querySelector('.profile-info__name');
const profileOccupation = document.querySelector('.profile-info__occupation');
//переменнные для попапа с добавлением картинки
const addPopup = document.querySelector('.popup_type_add');
const imageFormElement = addPopup.querySelector('.popup__form');
const openAddPopup = document.querySelector('.profile__add-button');
const addPopupTitleInput = addPopup.querySelector('.popup__title-text');
const addPopupLinkInput = addPopup.querySelector('.popup__link');

//переменные для попапа с открытием картинки
const imagePopup = document.querySelector('.popup_type_image');

const cardList = document.querySelector('.elements__list');

const formValidators = {}

//стрелочная функция валидации форм
const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    const validateForm = new FormValidator (config, form);
    formValidators[ form.name ] = validateForm;
    validateForm.enableValidation(); 
  });
}

const openPopupWithImage = new PopupWithImage(imagePopup);
const userInfo = new UserInfo({ profileName, profileOccupation })

//функция для открытия попапа с карточкой
const handleCardClick = (evt) => {
  const data = {
    link: evt.target.src,
    name: evt.target.closest('.element').querySelector('.element__title').textContent,
  };
  openPopupWithImage.open(data);
}

//функция создания карточки
const cardsList = new Section ({
  items: initialCards,
  renderer: (card) => {
    const newCard = new Card (card, '#element-template', handleCardClick);
    const cardElement = newCard.renderCard();
    return cardElement;
  },
}, 
cardList);
cardsList.renderItems();

//функция передачи заполненной информации для добавления новой карточки
const addCardForm = new PopupWithForm(addPopup, {
  handleFormSubmit: () => {
    const addPopupInput = {
        link: addPopupLinkInput.value,
        name: addPopupTitleInput.value
    }
    cardsList.addItem(addPopupInput);
    addCardForm.close();
  }
});
addCardForm.setEventListeners();

//функция передачи заполненной информации для обновления профиля пользователя
const editProfileForm = new PopupWithForm(profilePopup, {
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    editProfileForm.close();
  },
});
editProfileForm.setEventListeners();

//функция слушатель формы с добавлением карточки с валидацией
openAddPopup.addEventListener('click', function () {
  addCardForm.open();
  formValidators[ imageFormElement.name ].resetValidation();
});

//функция слушатель передачи заполненной информации профиля с валидацией формы
openProfilePopup.addEventListener('click', function() {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.occupation;
  editProfileForm.open(profilePopup);
  formValidators[ profileForm.name ].resetValidation();
});

openPopupWithImage.setEventListeners();

enableValidation(config);