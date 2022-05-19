import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
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
const popupEditSelector = '.popup_type_edit';
const formPopupEdit = document.querySelector('.popup__form_type_edit');
const nameInput = formPopupEdit.querySelector('.popup__input_type_name');
const jobInput = formPopupEdit.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__profession');

const profileNameSelector = '.profile__info-name';
const profileJobSelector = '.profile__profession';

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

const popupTypeEdit = new Popup(popupEditSelector);
const popupTypeAdd = new Popup(popupAdd);
const popupTypeImage = new PopupWithImage(popupImage, popupImagePicture, popupImageTitle);




const cardListSection = '.cards__list';

//редактирование профиля

const userInfo = new UserInfo(profileNameSelector, profileJobSelector);

const popupEdit = new PopupWithForm(popupEditSelector, {
    handleFormSubmit: (values) => {
        
        userInfo.setUserInfo(values);

    
        popupTypeEdit.close();
        popupTypeEdit.setEventListeners()

    }
})

popupEdit.setEventListeners();
/* function handleEditFormSubmit(evt) {
    evt.preventDefault(); 
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popupTypeEdit.close();
    popupTypeEdit.setEventListeners()
} */

/* const popupProfile = new PopupWithForm(popupProfileSelector, {
    handleFormSubmit: (values) => {
      userInfo.setUserInfo(values);
      popupProfile.close();
    }
  }); */

   

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

popupTypeImage.setEventListeners();

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
    popupTypeAdd.close();
    popupTypeAdd.setEventListeners() 
}


buttonOpenPopupEdit.addEventListener('click', function(){
    popupEdit.setInputValues(userInfo.getUserInfo());
    popupEdit.open();
  });







popupTypeEdit.close();
    popupTypeEdit.setEventListeners()

//открытие попап Add
buttonOpenPopupAdd.addEventListener('click', () => {    
    addCardValidator.resetErrors();
    popupTypeAdd.open();
    
});

popupTypeAdd.close();
    popupTypeAdd.setEventListeners()


editProfileValidator.enableValidation(); 
addCardValidator.enableValidation(); 

//сохранения данных из попапа

formPopupAdd.addEventListener('submit', handleAddFormSubmit); 



