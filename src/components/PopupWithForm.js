import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._input = this._form.querySelectorAll('.popup__input');

    }

    //Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
    _getInputValues() {
        this._values = {};
        this._input.forEach((input) =>  this._values[input.name] = input.value);
        return  this._values; 
    }

    setInputValues(data) {
        this._input.forEach((input) => {
            input.value = data[input.name];
        })

    }
    

    //Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
          });
    }

    close() {
        super.close();
        //this._form.reset();
    }
}




