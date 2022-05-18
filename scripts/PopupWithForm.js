import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;

    }

    //Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
    _getInputValues() {

    }

    //Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы

    setEventListeners() {

    }

    //Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
    close() {
        
    }
}