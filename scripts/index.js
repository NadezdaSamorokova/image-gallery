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

//функция для воспроизведения карточки
function renderCard(card) {
  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementTitle = cardElement.querySelector('.element__title');
  const elementLikeButton = cardElement.querySelector('.element__button-like');
  const elementButtonDelete = cardElement.querySelector('.element__button-delete');
  elementImage.src = card.link;
  elementImage.alt = card.name;
  elementTitle.textContent = card.name;

  //присваиваем значения линку и тексту карточки
  function cardData () {
    imagePopupImage.src = card.link;
    imagePopupImage.alt = card.name;
    imagePopupText.textContent = card.name;
    imagePopup.classList.toggle('popup_opened');
  };

  //слушатели на кнопку удаления карточки и 
  elementButtonDelete.addEventListener('click', () => {
    cardElement.remove();
  });
  elementLikeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__button-like_active');
  });
  //слушатель для открытия попапа с картинкой
  elementImage.addEventListener('click', cardData);

  return cardElement;
};

//стрелочная функция для добавления карточки
const addCard = (card, cardContainer) => {
  const newCard = renderCard(card);
  cardContainer.prepend(newCard);
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
  addPopup.classList.toggle('popup_opened');
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