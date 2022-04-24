import { openPopup } from './index.js';

const popupImage = document.querySelector('.popup_type_image');
const popupImagePicture = popupImage.querySelector('.popup__place-image');
const popupImageTitle = popupImage.querySelector('.popup__place-title');

export class Card {
    constructor(data, templateSelector, openPopupImage) {
        this._template = document.querySelector(templateSelector).content;
        this._name = data.name;
        this._link = data.link;
        this._like = data.like;
    }

    _likeCard = (evt) => {
        evt.target.classList.toggle('element__like_active');
    }

    _deleteCard = (evt) => {
        evt.target.closest('.element').remove();
    }

    _openPopupImage = () => {
        popupImagePicture.src = this._link;
        popupImageTitle.textContent = this._name;
        popupImagePicture.alt = this._name;
        openPopup(popupImage);
    }   

    _setEventListeners() {
        // like
        this._likeButton = this._card.querySelector('.element__like');
        this._likeButton.addEventListener('click', this._likeCard);
            
        //удаление
        this._card.querySelector('.element__delete-card').addEventListener('click', this._deleteCard);
 
        // открытие попап Image
        this._card.querySelector('.element__foto-button').addEventListener('click', this._openPopupImage);
    }

    createCard() {
        // клонируем содержимое тега template
        this._card = this._template.cloneNode(true);

        // наполняем содержимым
        this._cardImage = this._card.querySelector('.element__foto');
        this._card.querySelector('.element__title').textContent = this._name;
        
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        
        
        this._setEventListeners();
         
        return this._card;
    }
}