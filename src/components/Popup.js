export default class Popup{
    constructor(popupSelector) {
        //Принимает в конструктор единственный параметр — селектор попапа.
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector('.popup__close-icon');
    }
    
    open() {
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleCloseButton = () => {
        this.close();
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', this._handleCloseButton);
        this._popup.addEventListener('click', this._handleOverlayClose);
    }
}