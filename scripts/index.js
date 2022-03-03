//попап
const popup = document.querySelector('.popup');

//попап Edit
const buttonOpenPopupEdit = document.querySelector('.profile__button-edit');
const buttonClosePopupEdit = popup.querySelector('.popup__close-icon_type_edit');
const popupEdit = document.querySelector('.popup_type_edit');
let formPopupEdit = document.querySelector('.popup__form_type_edit');
let nameInput = formPopupEdit.querySelector('.popup__input_type_name');
let jobInput = formPopupEdit.querySelector('.popup__input_type_job');
let buttonSubmit = formPopupEdit.querySelector('.popup__button-submit');
let profileName = document.querySelector('.profile__info-name');
let profileJob = document.querySelector('.profile__profession');

//попап Add
const popupAdd = document.querySelector('.popup_type_add');
const buttonOpenPopupAdd = document.querySelector('.profile__button-add');
const buttonClosePopupAdd = document.querySelector('.popup__close-icon_type_add');
let formPopupAdd = document.querySelector('.popup__form_type_add');
let newPlaceInput = formPopupAdd.querySelector('.popup__input_type_new-place');
let linkInput = formPopupAdd.querySelector('.popup__input_type_link');

//попап Image
const popupImage = document.querySelector('.popup_type_image');
const popupImagePicture = popupImage.querySelector('.popup__place-image');
const popupImageTitle = popupImage.querySelector('.popup__place-title');
const buttonClosePopupImage = popupImage.querySelector('.popup__close-icon_type_image');

//открытие попапа
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
} 

//закрытие попапа
function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
} 

//открытие попап Edit
buttonOpenPopupEdit.addEventListener('click', function() {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

//закрытие попап Edit
buttonClosePopupEdit.addEventListener('click', function() {
    closePopup(popupEdit);
});

//открытие попап Add
buttonOpenPopupAdd.addEventListener('click', function() {    
    openPopup(popupAdd);
});

//закрытие попап Add
buttonClosePopupAdd.addEventListener('click', function() {
    closePopup(popupAdd);
});

//закрытие попап Image
buttonClosePopupImage.addEventListener('click', function() {
    closePopup(popupImage);
});

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    let name = nameInput.value; 
    let job = jobInput.value;
    
    profileName.textContent = name;
    profileJob.textContent = job;

    closePopup(popupEdit);
}

formPopupEdit.addEventListener('submit', formSubmitHandler); 

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cards = document.querySelector('.cards__list');

function addCard(element) {
    // клонируем содержимое тега template
    const template = document.querySelector ('.template').content.cloneNode(true);
    // наполняем содержимым
    template.querySelector('.element__title').textContent = element.name;
    template.querySelector('.element__foto').src = element.link;
    
    // like
    template.querySelector('.element__like').addEventListener('click', function (evt) { 
        evt.target.classList.toggle('element__like_active');
    });

    //удаление
    template.querySelector('.element__delete-card').addEventListener('click', function (evt) { 
        const cardDelete = evt.target.closest('.element'); 
        cardDelete.remove(); 
    });

    // открытие попап Image
    template.querySelector('.element__foto-button').addEventListener('click', function (evt) { 
        openPopup(popupImage);
        popupImagePicture.src = evt.target.src;
        popupImageTitle.textContent = element.name;
    });
    
    // отображаем на странице  
    cards.prepend(template);
}

initialCards.forEach(addCard);

function formAddSubmitHandler (evt) {
    evt.preventDefault(); 

    addCard({ 
        name: newPlaceInput.value, 
        link: linkInput.value, 
        alt: newPlaceInput.value 
    });

    formPopupAdd.reset();
    closePopup(popupAdd)
}

formPopupAdd.addEventListener('submit', formAddSubmitHandler); 