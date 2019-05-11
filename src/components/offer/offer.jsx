import React from "react";
import PropTypes from "prop-types";

const PremiumStatus = () => (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);

export const Offer = (props) => {
  const {place, onActiveCard, onDeactiveCard} = props;
  const getActiveCard = () => {
    onActiveCard(place);
  };

  return <article className="cities__place-card place-card" onMouseOver={getActiveCard} onMouseOut={onDeactiveCard}>
    {place.premium && <PremiumStatus/>}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={place.img} onClick={getActiveCard} width="260" height="200" alt="Place image"></img>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{place.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `93%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{place.description}</a>
      </h2>
      <p className="place-card__type">{place.type}</p>
    </div>
  </article>;
};

Offer.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    premium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onActiveCard: PropTypes.func.isRequired,
  onDeactiveCard: PropTypes.func.isRequired,
};
