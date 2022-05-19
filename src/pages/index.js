import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards } from '../scripts/cards.js';

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_state_invalid',
    inputErrorClass: 'popup__input_state_invalid',
}

const template = '#template';
const cards = document.querySelector('.cards__list');

//попап Edit
const buttonOpenPopupEdit = document.querySelector('.profile__button-edit');
const popupEditSelector = '.popup_type_edit';
const formPopupEdit = document.querySelector('.popup__form_type_edit');
const profileNameSelector = '.profile__info-name';
const profileJobSelector = '.profile__profession';

//попап Add
const popupAddSelector = '.popup_type_add';
const buttonOpenPopupAdd = document.querySelector('.profile__button-add');
const formPopupAdd = document.querySelector('.popup__form_type_add');
const popupImage = '.popup_type_image';
const popupImagePicture = '.popup__place-image';
const popupImageTitle = '.popup__place-title';

//валидация
const editProfileValidator = new FormValidator(validationConfig, formPopupEdit);
const addCardValidator = new FormValidator(validationConfig, formPopupAdd);
const popupTypeImage = new PopupWithImage(popupImage, popupImagePicture, popupImageTitle);

const cardListSection = '.cards__list';

const userInfo = new UserInfo(profileNameSelector, profileJobSelector);

const popupEdit = new PopupWithForm(popupEditSelector, {
    handleFormSubmit: (values) => {
        userInfo.setUserInfo(values);
        popupEdit.close();
    }
})

popupEdit.setEventListeners();

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

const popupAdd = new PopupWithForm(popupAddSelector, {
    handleFormSubmit: (values) => {
        cardsList.addItem(values);
        popupAdd.close();
    }
})

buttonOpenPopupEdit.addEventListener('click', function(){
    popupEdit.setInputValues(userInfo.getUserInfo());
    popupEdit.open();
});

buttonOpenPopupAdd.addEventListener('click', () => {    
    addCardValidator.resetErrors();
    popupAdd.open();
});

popupAdd.close();
popupEdit.close();

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupTypeImage.setEventListeners();

editProfileValidator.enableValidation(); 
addCardValidator.enableValidation();