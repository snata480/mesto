import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { initialCards } from './cards.js';

const valifationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_state_invalid',
    inputErrorClass: 'popup__input_state_invalid',
}

const template = '#template';
const cards = document.querySelector('.cards__list');

//попап
const popups = document.querySelectorAll('.popup')

//попап Edit
const buttonOpenPopupEdit = document.querySelector('.profile__button-edit');
const popupEdit = '.popup_type_edit';
const formPopupEdit = document.querySelector('.popup__form_type_edit');
const nameInput = formPopupEdit.querySelector('.popup__input_type_name');
const jobInput = formPopupEdit.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__profession');

//попап Add
const popupAdd = '.popup_type_add';
const buttonOpenPopupAdd = document.querySelector('.profile__button-add');
const formPopupAdd = document.querySelector('.popup__form_type_add');
const newPlaceInput = formPopupAdd.querySelector('.popup__input_type_new-place');
const linkInput = formPopupAdd.querySelector('.popup__input_type_link');

const popupImage = '.popup_type_image';
const popupImagePicture = '.popup__place-image';
const popupImageTitle = '.popup__place-title';

//валидация
const editProfileValidator = new FormValidator(valifationConfig, formPopupEdit);
const addCardValidator = new FormValidator(valifationConfig, formPopupAdd);

const popupTypeEdit = new Popup(popupEdit);
const popupTypeAdd = new Popup(popupAdd);
const popupTypeImage = new Popup(popupImage, popupImagePicture, popupImageTitle);




const cardListSection = '.cards__list';



//открытие попапа
//export function openPopup(popup) {
//    popup.classList.add('popup_is-opened');
    //закрытие по esc
 //   document.addEventListener('keydown', handleEscKey);
//} 

//закрытие попапа
function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscKey);
} 

function handleEscKey (evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_is-opened');
        closePopup(popupOpened);
    }
}

//редактирование профиля
function handleEditFormSubmit(evt) {
    evt.preventDefault(); 
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup(popupEdit);
}

/* function handleCardClick(name, link) {
    popupImagePicture.src = link;
    popupImageTitle.textContent = name;
    popupTypeImage.open();
}
 */

/*  const placeImage = item.link;
    const placeTitle = item.name; */


    

function createCard(item) {
    const card = new Card({
            item,
            handleCardClick: (name, link) => {
                popupTypeImage.open(name, link);  
            }
        }, 
        template, 
         
    );
        
    const cardElement = card.createCard(item)
    return cardElement
}

const cardsList = new Section({
    items: initialCards,
    renderer: (item) => { 

        const cardElement = createCard(item);
        cards.prepend(cardElement);
      }
    },
  cardListSection
); 

cardsList.renderItems();

//добавление новой карточки
function handleAddFormSubmit(evt) {
    evt.preventDefault(); 

    cardsList.addItem({
        name: newPlaceInput.value, 
        link: linkInput.value
    })
    formPopupAdd.reset();
    closePopup(popupAdd);
}

//открытие попап Edit
buttonOpenPopupEdit.addEventListener('click', function() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupTypeEdit.open()
});

//открытие попап Add
buttonOpenPopupAdd.addEventListener('click', () => {    
    addCardValidator.resetErrors();
    popupTypeAdd.open();
    
});

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-icon')) {
          closePopup(popup)
        }
    })
})

editProfileValidator.enableValidation(); 
addCardValidator.enableValidation(); 

//сохранения данных из попапа
formPopupEdit.addEventListener('submit', handleEditFormSubmit);
formPopupAdd.addEventListener('submit', handleAddFormSubmit); 



