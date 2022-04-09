import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import avatar from '../images/profile__avatar.jpg'
import { Card } from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [cards, setCards] = useState([]);

  const section = () => {
    if (cards) {
      return cards.map((card) => (
        <Card card={card} onCardClick={onCardClick} key={`card${card._id}`} />
      ));
    }
  };

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => console.log(error));
      api
      .getCardSever()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return(
  <main className="main">
    <section className="profile">
        <div className="profile__container">
            <img className="profile__avatar" src={userAvatar} />
            <div className="profile__avatar-owner" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__button-edit" type="button" onClick={onEditProfile}></button>
            <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__button-add" type="button" onClick={onAddPlace}></button>
    </section>
    <section className="elements">
      {section()}
    </section>
  </main>
  )
};

export default Main