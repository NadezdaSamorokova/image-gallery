import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, config } from '../utils/constants.js';
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

//переменные для попапа с открытием картинки
const imagePopupSelector = '.popup_type_image';
const addPopupSelector = '.popup_type_add';
const editPopupSelector = '.popup_type_edit';
const cardList = '.elements__list';

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

const openPopupWithImage = new PopupWithImage(imagePopupSelector);
openPopupWithImage.setEventListeners();

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
}, cardList);

cardsList.renderItems();

//функция передачи заполненной информации для добавления новой карточки
const addCardForm = new PopupWithForm(addPopupSelector, {
  handleFormSubmit: (data) => {
    cardsList.addItem(data);
    addCardForm.close();
  }
});

addCardForm.setEventListeners();

//функция передачи заполненной информации для обновления профиля пользователя
const editProfileForm = new PopupWithForm(editPopupSelector, {
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
  nameInput.value = data.nikname;
  jobInput.value = data.occupation;
  editProfileForm.open(profilePopup);
  formValidators[ profileForm.name ].resetValidation();
});

enableValidation(config);