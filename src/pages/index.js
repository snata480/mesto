import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'
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
  } from '../utils/constants.js';

const editProfileValidator = new FormValidator(validationConfig, formPopupEdit);
const addCardValidator = new FormValidator(validationConfig, formPopupAdd);
const popupTypeImage = new PopupWithImage(popupImage, popupImagePicture, popupImageTitle);

const userInfo = new UserInfo(profileNameSelector, profileJobSelector);

const popupEdit = new PopupWithForm(popupEditSelector, {
  handleFormSubmit: (values) => {
    api
      .setUserInfo(values)
      .then((resolve) => {
        userInfo.setUserInfo(resolve);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEdit.close();
      });
  },
});

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



buttonOpenPopupEdit.addEventListener('click', function(){
    popupEdit.setInputValues(userInfo.getUserInfo());
    popupEdit.open();
});


popupEdit.setEventListeners();
popupTypeImage.setEventListeners();

editProfileValidator.enableValidation(); 
addCardValidator.enableValidation();



const api = new Api({
    url: 'https://nomoreparties.co/v1/cohort-41',
    headers: {
        'content-type': 'application/json',
        authorization: '7e2b9a3c-629b-44c4-8d06-564506f4fe72',
    },
});

const popupAdd = new PopupWithForm(popupAddSelector, {
  handleFormSubmit: (values) => {
    api
    .addNewCard(values)
    .then((res) => {
      cardsList.addItem(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAdd.close();
    });
  }
})

buttonOpenPopupAdd.addEventListener('click', () => {    
  addCardValidator.resetValidation();
  popupAdd.open();
});

popupAdd.setEventListeners();

let cardsList
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then((data) => {
    userInfo.setUserInfo(data[0]);
    cardsList = new Section({
      items: data[1],
      renderer: (item) => { 
          const cardElement = createCard(item);
          cardsList.prependItem(cardElement)
        }
      },
    cardListSection
  ); 
  
  cardsList.renderItems(data[1]);
  })
  .catch((error) => {
    console.log(error);
  });
