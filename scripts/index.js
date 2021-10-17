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
const imageAddPopup = document.querySelector('.popup_type_add');
const openImageAddPopup = document.querySelector('.profile__add-button');
const closeImageAddPopup = imageAddPopup.querySelector('.popup__close-icon');
const imageFormElement = imageAddPopup.querySelector('.popup__form');
const titleInput = imageAddPopup.querySelector('.popup__title');
const linkInput = imageAddPopup.querySelector('.popup__link');
const imageTitle = document.querySelector('.element__title');
const imageLink = document.querySelector('.element__image');

//функция изменения иформации для добавленния новой картинки
function addNewImage (evt) {
  evt.preventDefault();
  imageTitle.textContent = titleInput.value;
  linkInput.textContent = linkInput.value;
  imageAddPopup.classList.toggle('popup_opened');
}

//функция передачи заполненной информации для добавленния картинки
function addImageSubmit (evt) {
  evt.preventDefault(); 
  titleInput.value = imageTitle.textContent;
  linkInput.value = imageLink.textContent;
  imageAddPopup.classList.toggle('popup_opened');
}

//слушатели для попапа с добавлением картинки
openImageAddPopup.addEventListener('click', addNewImage);
imageFormElement.addEventListener('click', addImageSubmit);
closeImageAddPopup.addEventListener('click',() => {
  popupClosed(imageAddPopup);
});



//переменнные для создания картинок
const elementTemplate = document.querySelector('#element-template').content;
const imageElement = elementTemplate.querySelector('.element').cloneNode('true');
const elementImage = elementTemplate.querySelector('.element__image');
const elementTitle = elementTemplate.querySelector('.element__title');
const elementButtonlike = elementTemplate.querySelector('.element__button-like');
const elementButtonDelete = elementTemplate.querySelector('.element__button-delete');

const imagePopup = document.querySelector('.popup_type_image');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupText = imagePopup.querySelector('.popup__caption');
const closeimagePopup = imagePopup.querySelector('.popup__close-icon');



function createImage (card) {
  evt.preventDefault(); 
  imagePopupImage.setAttribute('src', card.link);
  imagePopupImage.setAttribute('alt', card.name);
  elementTitle.textContent = card.name;
  imagePopup.classList.toggle('popup_opened');
}

function editImagePopup (card) {
  elementImage.setAttribute('src', card.link);
  elementImage.setAttribute('alt', card.name);
  elementTitle.textContent = card.name;

  return imageElement;
}








//функция открытия попапа
function popupOpened(popup) {
  popup.classList.add('popup_opened');
}

//функция закрытия попапа
function popupClosed(popup) {
  popup.classList.remove('popup_opened');
}



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