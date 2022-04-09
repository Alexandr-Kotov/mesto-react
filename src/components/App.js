import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { ImagePopup } from './ImagePopup.js';

function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);

  const closeAllPopups = (e) => {
    if (
      e.type === "keydown" ||
      e.target.classList.contains("popup_opened") ||
      e.target.classList.contains("popup__close")
    ) {
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setSelectedCard(null);
    }
  };

  return (
    <>
            <Header />
            <Main
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onCardClick={handleCardClick}
            />
            <Footer />
            <PopupWithForm
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              title="Редактировать профиль"
              name="edit"
              buttonText="Сохранить"
            >
              <input
                type="text"
                className="popup__input"
                id="name-input"
                name="profileName"
                placeholder="Имя"
                required
                minLength="2"
                maxLength="40"
              />
              <span id="name-input-error" className="popup__input-error"></span>
              <input
                type="text"
                className="popup__input"
                id="description-input"
                name="profileAboutme"
                placeholder="О себе"
                required
                minLength="2"
                maxLength="200"
              />
              <span id="description-input-error" className="popup__input-error"></span>
            </PopupWithForm>
            <PopupWithForm
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              title="Новое место"
              name="add"
              buttonText="Создать"
            >
              <input
                type="text"
                className="popup__input"
                id="card-name-input"
                name="cardName"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
              />
              <span id="card-name-input-error" className="popup__input-error"></span>
              <input
                type="url"
                className="popup__input"
                id="card-linkAvatar-input"
                name="cardLink"
                placeholder="Ссылка на картинку"
                required
              />
              <span id="card-linkAvatar-input-error" className="popup__input-error"></span>
            </PopupWithForm>
            <PopupWithForm
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              title="Обновить автар"
              name="avatar"
              buttonText="Сохранить"
            >
              <input
                type="url"
                className="popup__input"
                id="card-link-input"
                name="avatarLink"
                placeholder="Ссылка на картинку"
                required
              />
              <span id="card-link-input-error" className="popup__input-error"></span>
            </PopupWithForm>
            <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </>
  );
}

export default App;
