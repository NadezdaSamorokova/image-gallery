import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { config } from '../utils/constants.js';
import PopupConfirmDelete from '../components/PopupConfirmDelete.js';
import Api from '../components/Api.js';

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
//переменнные для попапа с изменением аватара
const avatarPopup = document.querySelector('.popup_edit-avatar');
const avatarForm = avatarPopup.querySelector('.popup__form');
const profileAvatar = document.querySelector('.profile__avatar');
const editProfileAvatar = document.querySelector('.profile__avatar-edit');

//переменные для попапа с открытием картинки
const imagePopupSelector = '.popup_type_image';
const addPopupSelector = '.popup_type_add';
const editPopupSelector = '.popup_type_edit';
const avatarPopupSelector = '.popup_edit-avatar';
const deleteCardPopup = '.popup_type_delete';
const cardList = '.elements__list';

const formValidators = {};

let userId = '';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-34/',
  headers: {
    Authorization: '302340aa-fc01-46c7-9fc8-2e2b6878fdbb',
    'Content-Type': 'application/json',
  },
});

//промисы
const promises = [api.getUserInfo(), api.getCards()]
Promise.all(promises)
.then(([userData, items]) => {
  userId = userData._id;
  cardsList.renderItems(items);
  userInfo.setUserInfo(userData);
})
.catch((err) => {
  console.log(err)
})

//открытие попапа с картинкой
const openPopupWithImage = new PopupWithImage(imagePopupSelector);
openPopupWithImage.setEventListeners();

//пересоздаём картинку
const createNewCard = (data) => {
  const newCard = new Card({data, userId,
    handleCardClick: () => {
      openPopupWithImage.open({name: data.name, link: data.link});
    },
    handleDeleteCard: (id, element) => {
      deleteCardForm.open();
      deleteCardForm.getCard(id, element);
    },
    handleCardLike: {
      handleSetLike: (id) => {
        api.addCardLike(id)
        .then((res) => {
          newCard.updateLikes(res.likes.length);
        })
        .catch(err => {
          console.log(err);
        })
      },
      handleDeleteLike: (id) => {
        api.deleteCardLike(id)
        .then((res) => {
          newCard.updateLikes(res.likes.length);
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
   }, '#element-template');

   return newCard.renderCard();
};

//добавляем картинки на страницу
const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(createNewCard(item));
  }
}, cardList);

//функция передачи заполненной информации для добавления новой карточки
const addCardForm = new PopupWithForm(addPopupSelector, {
  handleFormSubmit: (dataValues) => {
    api.addNewCard(dataValues)
    .then((data) => {
      cardsList.addItem(createNewCard(data));
      addCardForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addCardForm.showLoadingStatus(false);
    });
  }
});

addCardForm.setEventListeners();

//функция с полной информацией о пользователе
const userInfo = new UserInfo({ profileName, profileOccupation, profileAvatar })

//функция передачи заполненной информации для обновления профиля пользователя
const editProfileForm = new PopupWithForm(editPopupSelector, {
  handleFormSubmit: (data) => {
    api.editProfile(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      editProfileForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editProfileForm.showLoadingStatus(false);
    });
  },
});

editProfileForm.setEventListeners();

//функция обновления аватара
const editAvatarForm = new PopupWithForm(avatarPopupSelector, {
  handleFormSubmit: (dataValues) => {
    api.editAvatar(dataValues)
    .then((data) => {
      userInfo.setUserInfo(data);
      editAvatarForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editAvatarForm.showLoadingStatus(false);
    });
  },
});

editAvatarForm.setEventListeners();

//функция с удаелнием персонализированной картинки 
const deleteCardForm = new PopupConfirmDelete(deleteCardPopup, {
  handleSubmitDelete: (id, element) => {
    api.deleteCard(id)
    .then(() => {
      element.remove();
      element = '';
      deleteCardForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
  }
});
deleteCardForm.setEventListeners();

//стрелочная функция валидации форм
const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    const validateForm = new FormValidator (config, form);
    formValidators[ form.name ] = validateForm;
    validateForm.enableValidation(); 
  });
}

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

//функция слушатель формы с изменением аватара с валидацией
editProfileAvatar.addEventListener('click', function () {
  editAvatarForm.open();
  formValidators[ avatarForm.name ].resetValidation();
});

enableValidation(config);