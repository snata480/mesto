export class FormValidator {
    constructor(config, form) {
        this._form = form
        this._config = config
    }

    _showError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputErrorClass);
    }
    
    _hideError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._config.inputErrorClass);
    }

    _checkInputValidity(input) {
        if(input.validity.valid) {
            this._hideError(input);
        } else {
            this._showError(input);
        }
    }

    _setButtonState(button, isActive) {
        if(isActive) {
            button.classList.remove(this._config.inactiveButtonClass);
            button.disabled = false;
        } else {
            button.classList.add(this._config.inactiveButtonClass);
            button.disabled = 'disabled';
        }
    }

    _setEventListener() {
        const inputList = this._form.querySelectorAll(this._config.inputSelector);
        const buttonSubmit = this._form.querySelector(this._config.submitButtonSelector);
        
        inputList.forEach(input => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(input);
                this._setButtonState(buttonSubmit, this._form.checkValidity())
            })
        })
    }

    enableValidation() { 
        this._setEventListener();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        const buttonSubmit = this._form.querySelector(this._config.submitButtonSelector);
        this._setButtonState(buttonSubmit, this._form.checkValidity());
    };  
}
