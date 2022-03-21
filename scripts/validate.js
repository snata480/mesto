const valifationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_state_invalid',
    inputErrorClass: 'popup__input_state_invalid',
}

function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
}

function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputErrorClass);
}

function checkInputValidity(form, input, config) {
    if(input.validity.valid) {
        hideError(form, input, config);
    } else {
        showError(form, input, config);
    }
}

function setButtonState(button, isActive, config) {
    if(isActive) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = 'disabled';
    }
}

function setEventListener(form, config) {

    const buttonSubmit = form.querySelector(config.submitButtonSelector);
    const inputList = form.querySelectorAll(config.inputSelector);

    inputList.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input, config);
            setButtonState(buttonSubmit, form.checkValidity(), config)
        })
    })
}

function enableValidation(config){
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach(form => {
        setEventListener(form, config);
        
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        const buttonSubmit = form.querySelector(config.submitButtonSelector);
        setButtonState(buttonSubmit, form.checkValidity(), config);
    })
};   
 
enableValidation(valifationConfig);