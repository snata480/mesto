import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';

import {
    validationConfig,
    template,
    buttonOpenPopupEdit,
    popupEditSelector,
    formPopupEdit,
    profileNameSelector,
    profileJobSelector,
    popupAddSelector,
    buttonOpenPopupAdd,
    formPopupAdd,
    popupImage,
    popupImagePicture,
    popupImageTitle,
    cardListSection,
    initialCards
  } from '../utils/constants.js';

const editProfileValidator = new FormValidator(validationConfig, formPopupEdit);
const addCardValidator = new FormValidator(validationConfig, formPopupAdd);
const popupTypeImage = new PopupWithImage(popupImage, popupImagePicture, popupImageTitle);

const userInfo = new UserInfo(profileNameSelector, profileJobSelector);

const popupEdit = new PopupWithForm(popupEditSelector, {
    handleFormSubmit: (values) => {
        userInfo.setUserInfo(values);
        popupEdit.close();
    }
})


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
        cardsList.prependItem(cardElement)
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
    addCardValidator.resetValidation();
    popupAdd.open();
});

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupTypeImage.setEventListeners();

editProfileValidator.enableValidation(); 
addCardValidator.enableValidation();


fetch('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
  headers: {
    authorization: '7e2b9a3c-629b-44c4-8d06-564506f4fe72'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 