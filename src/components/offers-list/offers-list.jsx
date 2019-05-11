import React from "react";
import PropTypes from "prop-types";
import {Offer} from '../offer/offer.jsx';

export const OffersList = (props) => {
  const {places, onActiveCard, onDeactiveCard} = props;
  return <div className="cities__places-list places__list tabs__content">
    {places.map((it, i) => <Offer key={i} place={it} onActiveCard={onActiveCard} onDeactiveCard={onDeactiveCard}/>)}
  </div>;
};

OffersList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    premium: PropTypes.bool,
    img: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  onActiveCard: PropTypes.func.isRequired,
  onDeactiveCard: PropTypes.func.isRequired,
};
