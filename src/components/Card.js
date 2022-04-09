export function Card({ card, onCardClick }) {
    const handleClick = () => {
      onCardClick(card);
    };
  
    return (
        <div className="elements__card">
        <button className="elements__delete" type="button"></button>
        <img className="elements__img" src={card.link} alt={card.name} onClick={handleClick} />
        <div className="elements__row">
            <h2 className="elements__title">{card.name}</h2>
            <div className="elements__container-likes">
                <button className="elements__button" type="button"></button>
                <span className="elements__button-count">{card.likes.length}</span>
            </div>
        </div>
    </div>
    );
  }