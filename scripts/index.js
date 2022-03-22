const template = document.querySelector ('.template');
const cards = document.querySelector('.cards__list');

//попап
const popups = document.querySelectorAll('.popup')

//попап Edit
const buttonOpenPopupEdit = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_type_edit');
const formPopupEdit = document.querySelector('.popup__form_type_edit');
const nameInput = formPopupEdit.querySelector('.popup__input_type_name');
const jobInput = formPopupEdit.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__profession');

//попап Add
const popupAdd = document.querySelector('.popup_type_add');
const buttonOpenPopupAdd = document.querySelector('.profile__button-add');
const formPopupAdd = document.querySelector('.popup__form_type_add');
const newPlaceInput = formPopupAdd.querySelector('.popup__input_type_new-place');
const linkInput = formPopupAdd.querySelector('.popup__input_type_link');
const buttonSubmit = formPopupAdd.querySelector('.popup__button-submit');

//попап Image
const popupImage = document.querySelector('.popup_type_image');
const popupImagePicture = popupImage.querySelector('.popup__place-image');
const popupImageTitle = popupImage.querySelector('.popup__place-title');

//открытие попапа
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    //закрытие по esc
    document.addEventListener('keydown', closePopupKeydown);
} 

//закрытие попапа
function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupKeydown);
} 

function closePopupKeydown (evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_is-opened');
        closePopup(popupOpened);
    }
}

//редактирование профиля
function handleEditFormSubmit(evt) {
    evt.preventDefault(); 
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup(popupEdit);
}

//создание карточки
function createCard(element) {
    // клонируем содержимое тега template
    const card = template.content.cloneNode(true);
    // наполняем содержимым
    card.querySelector('.element__title').textContent = element.name;
    card.querySelector('.element__foto').src = element.link;
    card.querySelector('.element__foto').alt = element.name;
    
    // like
    card.querySelector('.element__like').addEventListener('click', function (evt) { 
        evt.target.classList.toggle('element__like_active');
    });

    //удаление
    card.querySelector('.element__delete-card').addEventListener('click', function (evt) { 
        evt.target.closest('.element').remove()
    });

    // открытие попап Image
    card.querySelector('.element__foto-button').addEventListener('click', function (evt) { 
        popupImagePicture.src = evt.target.src;
        popupImageTitle.textContent = element.name;
        popupImagePicture.alt = element.name;
        openPopup(popupImage);
    });
     
    return card;
}

function renderCard(item) {
    cards.prepend(createCard(item));
}

initialCards.forEach((item) => renderCard(item))

//добавление новой карточки
function handleAddFormSubmit(evt) {
    evt.preventDefault(); 

    renderCard({
        name: newPlaceInput.value, 
        link: linkInput.value
    })
    
    formPopupAdd.reset();
    closePopup(popupAdd);
}

//открытие попап Edit
buttonOpenPopupEdit.addEventListener('click', function() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    formPopupEdit.reset();
    openPopup(popupEdit);
});

//открытие попап Add
buttonOpenPopupAdd.addEventListener('click', function() {    
    formPopupAdd.reset();
    buttonSubmit.classList.add('popup__button-submit_state_invalid');
    buttonSubmit.setAttribute("disabled", "disabled");
    openPopup(popupAdd);
});

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-icon')) {
          closePopup(popup)
        }
    })
})

//сохранения данных из попапа
formPopupEdit.addEventListener('submit', handleEditFormSubmit);
formPopupAdd.addEventListener('submit', handleAddFormSubmit); 