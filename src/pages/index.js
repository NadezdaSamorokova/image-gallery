import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupConfirmDelete from '../components/PopupConfirmDelete.js';
import Api from '../components/Api.js';
import { config, profilePopup, openProfilePopup, profileForm, nameInput, jobInput, profileName, profileOccupation, 
  imageFormElement, openAddPopup, avatarForm, profileAvatar, editProfileAvatar, imagePopupSelector, addPopupSelector, 
  editPopupSelector, avatarPopupSelector, deleteCardPopup, cardList } from '../utils/constants.js';

const formValidators = {};

let userId = '';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-34/',
  headers: {
    Authorization: '302340aa-fc01-46c7-9fc8-2e2b6878fdbb',
    'Content-Type': 'application/json',
  },
});

//Promise
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

//opening Card popup
const openPopupWithImage = new PopupWithImage(imagePopupSelector);
openPopupWithImage.setEventListeners();

//render picture
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

//adding the picture
const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(createNewCard(item));
  }
}, cardList);

//function for passing filled information to add a new card
const addCardForm = new PopupWithForm(addPopupSelector, {
  handleFormSubmit: (dataValues) => {
    api.addNewCard(dataValues)
    .then((data) => {
      cardsList.addNewItem(createNewCard(data));
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

//function with the full information about the user
const userInfo = new UserInfo({ profileName, profileOccupation, profileAvatar })

//function for passing filled information to update user profile
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

//Avatar update function
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

//Function to delete the card 
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

//Arrow function for form validation
const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    const validateForm = new FormValidator (config, form);
    formValidators[ form.name ] = validateForm;
    validateForm.enableValidation(); 
  });
}

//Listener function for form with card addition and validation
openAddPopup.addEventListener('click', function () {
  addCardForm.open();
  formValidators[ imageFormElement.name ].resetValidation();
});

//Listener function for transmitting filled profile information with form validation
openProfilePopup.addEventListener('click', function() {
  const data = userInfo.getUserInfo();
  nameInput.value = data.nikname;
  jobInput.value = data.occupation;
  editProfileForm.open(profilePopup);
  formValidators[ profileForm.name ].resetValidation();
});

//Listener function for form with avatar change and validation
editProfileAvatar.addEventListener('click', function () {
  editAvatarForm.open();
  formValidators[ avatarForm.name ].resetValidation();
});

enableValidation(config);