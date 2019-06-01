import React from "react";
import PropTypes from "prop-types";
import Offer from '../offer/offer.jsx';

export const OffersList = (props) => {
  const {offers, onOfferImgClick} = props;
  return <div className="cities__places-list places__list tabs__content">
    {offers.map((it, i) => <Offer key={`place-${i}`} offer={it} onOfferImgClick={onOfferImgClick}/>)}
  </div>;
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  onOfferImgClick: PropTypes.func.isRequired,
};
