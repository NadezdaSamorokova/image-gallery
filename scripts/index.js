const openPopup = document.querySelector('.profile-info__edit-button');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close-icon');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('input[name=name]');
const jobInput = document.querySelector('input[name=occupation]');
const profileName = document.querySelector('.profile-info__name');
const profileOccupation = document.querySelector('.profile-info__occupation');

function openedPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileOccupation.textContent
}

function formCloseHandler () {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;
    popup.classList.toggle('popup_opened');
}

openPopup.addEventListener('click', openedPopup);
closePopup.addEventListener('click', formCloseHandler);
formElement.addEventListener('submit', formSubmitHandler); 