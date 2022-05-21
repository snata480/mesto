export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_state_invalid',
    inputErrorClass: 'popup__input_state_invalid',
}

export const template = '#template';

//попап Edit
export const buttonOpenPopupEdit = document.querySelector('.profile__button-edit');
export const popupEditSelector = '.popup_type_edit';
export const formPopupEdit = document.querySelector('.popup__form_type_edit');
export const profileNameSelector = '.profile__info-name';
export const profileJobSelector = '.profile__profession';

//попап Add
export const popupAddSelector = '.popup_type_add';
export const buttonOpenPopupAdd = document.querySelector('.profile__button-add');
export const formPopupAdd = document.querySelector('.popup__form_type_add');
export const popupImage = '.popup_type_image';
export const popupImagePicture = '.popup__place-image';
export const popupImageTitle = '.popup__place-title';

export const cardListSection = '.cards__list';

export const initialCards = [
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