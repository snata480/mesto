//Создайте класс Popup, который отвечает за открытие и закрытие попапа.
export default class Popup{
    constructor(popupSelector) {
        //Принимает в конструктор единственный параметр — селектор попапа.
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector('.popup__close-icon');

    }
    
    open() {
        
        this._popup.classList.add('popup_is-opened');
            //закрытие по esc
        document.addEventListener('keydown', this._handleEscKey);
        
        
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscKey);
    }

    _handleCloseButton = () => {
        this.close();
    }

    _handleEscKey = (evt) => {
        if (evt.key === 'Escape') {
            const popupOpened = document.querySelector('.popup_is-opened');
            this.close();
        }
    }
    setEventListeners() {
        this._closeButton.addEventListener('click', this._handleCloseButton);

    }

//Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
//Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.
}

 
