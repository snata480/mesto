//Создайте класс Popup, который отвечает за открытие и закрытие попапа.
export class Popup{
    constructor(popupSelector) {
        //Принимает в конструктор единственный параметр — селектор попапа.
        this._popup = document.querySelector(popupSelector);

    }
    
    open() {
        
        this._popup.classList.add('popup_is-opened');
            //закрытие по esc
            //document.addEventListener('keydown', handleEscKey);
        
        
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
            //document.removeEventListener('keydown', handleEscKey);
    }
//Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
//Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
//Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.
}

 
