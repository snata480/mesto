import Popup from './Popup.js'
export class PopupWithImage extends Popup {
    constructor(popupSelector, imageSelector, titleSelector) {
        super(popupSelector);
        this._popupPicture = this._popup.querySelector(imageSelector);
        this._popupTitle = this._popup.querySelector(titleSelector);
    }

    open(name, link) {
        this._popupPicture.alt = name;
        this._popupTitle.textContent = name;
        this._popupPicture.src = link;

        super.open();
      }
}