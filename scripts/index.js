const buttonOpenPopupEdit = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const buttonClosePopup = popup.querySelector('.popup__close-icon');

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

const cards = document.querySelector('.cards__list');

function addCard(element) {
    // клонируем содержимое тега template
    const template = document.querySelector ('.template').content.cloneNode(true);
    // наполняем содержимым
    template.querySelector('.element__title').textContent = element.name;
    template.querySelector('.element__foto').src = element.link;  
    // отображаем на странице  
    cards.append(template);

}

initialCards.forEach(addCard);












let form = document.querySelector('.popup__form');
let nameInput = form.querySelector('.popup__input_type_name');
let jobInput = form.querySelector('.popup__input_type_job');
let buttonSubmit = form.querySelector('.popup__button-submit');
let profileName = document.querySelector('.profile__info-name');
let profileJob = document.querySelector('.profile__profession');

const openPopup = function() {
    popup.classList.add('popup_is-opened');

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

const closePopup = function() {
    popup.classList.remove('popup_is-opened');
};

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    let name = nameInput.value; 
    let job = jobInput.value;
    
    profileName.textContent = name;
    profileJob.textContent = job;

    closePopup();
}

buttonOpenPopupEdit.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmitHandler); 