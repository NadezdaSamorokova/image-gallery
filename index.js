const openPopup = document.querySelector('.profile-info__edit-button');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close-icon');

function togglePopup() {
    popup.classList.toggle('popup_opened');
}

openPopup.addEventListener('click', togglePopup);

closePopup.addEventListener('click', togglePopup);


const formElement = document.querySelector('.popup__container');

const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_occupation');


function formSubmitHandler (evt) {
    evt.preventDefault(); 

    document.querySelector('.profile-info__name').textContent = nameInput.value;
    document.querySelector('.profile-info__occupation').textContent = jobInput.value;
    togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 
