import React from "react";
import PropTypes from "prop-types";

const PremiumStatus = () => (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);

const Offer = (props) => {
  const {offer, onOfferImgClick} = props;

  const getHighlightedPinCard = (evt) => {
    evt.preventDefault();
    onOfferImgClick(offer);
  };

  return <article className="cities__place-card place-card" >
    {offer.isPremium && <PremiumStatus/>}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={offer.img} width="260" height="200" alt="Place image" onClick={getHighlightedPinCard}></img>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
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
          <span style={{width: `${offer.rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#" >{offer.description}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

Offer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    mapCoordinates: PropTypes.arrayOf(PropTypes.number),
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      mapCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
  }).isRequired,
  onOfferImgClick: PropTypes.func.isRequired,
};

export default Offer;
