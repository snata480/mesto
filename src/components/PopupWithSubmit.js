import Popup from './Popup.js'
export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, {handleDeleteConfirm}) {
        super(popupSelector);
        this._handleDeleteConfirm = handleDeleteConfirm;
        this._buttonDeleteConfirm = this._popup.querySelector('.popup__button-submit');
        
    }
    
    setEventListeners() {
        super.setEventListeners();

        this._buttonDeleteConfirm.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleDeleteConfirm();
        });
    }
}