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
    // initialCards
  } from '../utils/constants.js';

const editProfileValidator = new FormValidator(validationConfig, formPopupEdit);
const addCardValidator = new FormValidator(validationConfig, formPopupAdd);
const popupTypeImage = new PopupWithImage(popupImage, popupImagePicture, popupImageTitle);

const userInfo = new UserInfo(profileNameSelector, profileJobSelector);

/* const popupEdit = new PopupWithForm(popupEditSelector, {
    handleFormSubmit: (values) => {
        userInfo.setUserInfo(values);
        popupEdit.close();
    }
}) */


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

// const cardsList = new Section({
//     items: initialCards,
//     renderer: (item) => { 
//         const cardElement = createCard(item);
//         cardsList.prependItem(cardElement)
//       }
//     },
//   cardListSection
// ); 

// cardsList.renderItems();

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


/* fetch('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
  headers: {
    authorization: '7e2b9a3c-629b-44c4-8d06-564506f4fe72'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 
 */



































// import { FormValidator } from '../components/FormValidator.js';
// import { Card } from '../components/Card.js';
// import { Section } from '../components/Section.js';
// import PopupWithImage from '../components/PopupWithImage.js';
// import PopupWithForm from '../components/PopupWithForm.js';
// import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'
// import PopupWithSubmit from '../components/PopupWithSubmit.js'

// import './index.css';

// import {
//     validationConfig,
//     template,
//     buttonOpenPopupEdit,
//     popupEditSelector,
//     formPopupEdit,
//     profileNameSelector,
//     profileJobSelector,
//     avatarSelector,
//     popupAddSelector,
//     buttonOpenPopupAdd,
//     formPopupAdd,
//     popupImage,
//     popupImagePicture,
//     popupImageTitle,
//     cardListSection
//   } from '../utils/constants.js';

//   const popupDeleteCardSelector = '.popup_type_delete-card';

// const editProfileValidator = new FormValidator(validationConfig, formPopupEdit);
// const addCardValidator = new FormValidator(validationConfig, formPopupAdd);
// const popupTypeImage = new PopupWithImage(popupImage, popupImagePicture, popupImageTitle);
// const popupWithSubmit = new PopupWithSubmit(popupDeleteCardSelector, {
//   handleDeleteConfirm: (item) => {
//     /* popupWithSubmit.cardInstance = item; */

//     popupWithSubmit.close();
// }
// });


// const userInfo = new UserInfo(profileNameSelector, profileJobSelector/* , avatarSelector */);

// function createCard(item) {
//     const card = new Card({
//             item,
//             handleCardClick: (name, link) => {
//                 popupTypeImage.open(name, link);  
//             },
//             handleDeleteCardClick: (card) => {
//               //popupWithSubmit.card = card;

//               popupWithSubmit.open();
//           }
//         }, 
//         template, 
//     );
//     const cardElement = card.createCard(item)
//     return cardElement
// }

// const popupAdd = new PopupWithForm(popupAddSelector, {
//     handleFormSubmit: (values) => {
//         cardsList.addItem(values);
//         popupAdd.close();
//     }
// })

// buttonOpenPopupAdd.addEventListener('click', () => {    
//     addCardValidator.resetValidation();
//     popupAdd.open();
// });

// const buttonOpenPopupWithSubmit = document.querySelector('.element__delete-card')

// /* buttonOpenPopupWithSubmit.addEventListener('click', () => {    
//   popupWithSubmit.open();
// }) */;

// popupAdd.setEventListeners();

// popupTypeImage.setEventListeners();
// popupWithSubmit.setEventListeners();

// editProfileValidator.enableValidation(); 
// addCardValidator.enableValidation();

const api = new Api({
    url: 'https://nomoreparties.co/v1/cohort-41',
    headers: {
        'content-type': 'application/json',
        authorization: '7e2b9a3c-629b-44c4-8d06-564506f4fe72',
    },
});




/* const editProfilePopup = new PopupWithForm({
  handleFormSubmit: (userData) => {
    api.editUserInfo(userData)
      .then((resolve) => {
        addUserInfo.setUserInfo(resolve);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      })
      .finally(() => {
        editProfilePopup.close();
      })
  }
}, popupEditProfile);
 */




// //api.getUserInfo();
// const popupEdit = new PopupWithForm(popupEditSelector, {
//   handleFormSubmit: (data) => {
//     api.setUserInfo(data).then((res) => {
//       userInfo.setUserInfo(res);
//       popupEdit.close();
//     })
//   },
// });

// popupEdit.setEventListeners();
// buttonOpenPopupEdit.addEventListener('click', function(){
//   popupEdit.setInputValues(userInfo.getUserInfo(api.getUserInfo));
//   popupEdit.open();

// });

const cards = api.getInitialCards();
cards.then((data) => {
  const cardsList = new Section({
    items: data,
    renderer: (data) => { 
        const cardElement = createCard(data);
        cardsList.prependItem(cardElement)
      }
    },
  cardListSection
); 

cardsList.renderItems();
})




Promise.all([api.getUserInfo()])
  .then(([data]) => {
    userInfo.setUserInfo(data);
  })
  .catch((error) => {
    console.log(error);
  });