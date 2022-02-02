//объект с классами и селекторами для валидации
export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
  };
  
//переменнные для попапа с изменением имени профиля
export const profilePopup = document.querySelector('.popup_type_edit');
export const openProfilePopup = document.querySelector('.profile-info__edit-button');
export const profileForm = profilePopup.querySelector('.popup__form');
export const nameInput = profilePopup.querySelector('.popup__name');
export const jobInput = profilePopup.querySelector('.popup__occupation');
export const profileName = document.querySelector('.profile-info__name');
export const profileOccupation = document.querySelector('.profile-info__occupation');
//переменнные для попапа с добавлением картинки
export const addPopup = document.querySelector('.popup_type_add');
export const imageFormElement = addPopup.querySelector('.popup__form');
export const openAddPopup = document.querySelector('.profile__add-button');
//переменнные для попапа с изменением аватара
export const avatarPopup = document.querySelector('.popup_edit-avatar');
export const avatarForm = avatarPopup.querySelector('.popup__form');
export const profileAvatar = document.querySelector('.profile__avatar');
export const editProfileAvatar = document.querySelector('.profile__avatar-edit');

//переменные для попапа с открытием картинки
export const imagePopupSelector = '.popup_type_image';
export const addPopupSelector = '.popup_type_add';
export const editPopupSelector = '.popup_type_edit';
export const avatarPopupSelector = '.popup_edit-avatar';
export const deleteCardPopup = '.popup_type_delete';
export const cardList = '.elements__list';
