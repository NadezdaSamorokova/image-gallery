const openPopup = document.querySelector('.profile-info__edit-button');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close-icon');

function togglePopup() {
    popup.classList.toggle('popup_opened');
}

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-occupation');
const profileName = document.querySelector('.profile-info__name');
const profileOccupation = document.querySelector('.profile-info__occupation');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;
    togglePopup();
}

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler); 