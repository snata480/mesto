export class Card {
    constructor({item, handleCardClick, handleDeleteCardClick}, templateSelector) {
        this._template = document.querySelector(templateSelector).content;
        this._name = item.name;
        this._link = item.link;
        this._like = item.like;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCardClick = handleDeleteCardClick
    }

    _likeCard = (evt) => {
        evt.target.classList.toggle('element__like_active');
        this._likeCounter = document.querySelector('.element__like-counter');
        this._likeCounter = 0
    }

    deleteCard = (evt) => {
        evt.target.closest('.element').remove();
    }
    
    _setEventListeners() {
        // like
        this._likeButton.addEventListener('click', this._likeCard);
            
        //удаление
        const deleteCardButton =  this._card.querySelector('.element__delete-card');
        deleteCardButton.addEventListener('click', this._handleDeleteCardClick);
        
 
        // открытие попап Image
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
    }

    createCard() {
        // клонируем содержимое тега template
        this._card = this._template.cloneNode(true);
        this._likeButton = this._card.querySelector('.element__like');
        // наполняем содержимым
        this._cardImage = this._card.querySelector('.element__foto');
        this._card.querySelector('.element__title').textContent = this._name;
        
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        
        this._setEventListeners();
         
        return this._card;
    }
}