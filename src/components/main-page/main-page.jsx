import React from "react";
import PropTypes from "prop-types";

import {Location} from '../location/location.jsx';
import {OffersList} from "../offers-list/offers-list.jsx";
import {Map} from "../map/map.jsx";
import {withHoveredCard} from "../../hocs/withHoveredCard/withHoveredCard.jsx";
import {withActiveCard} from "../../hocs/withActiveCard/withActiveCard.jsx";

const MainPage = (props) => {
  const {cities, offers, onCardMouseEnter, onCardMouseOut, hoveredCard, city, places, onCityClick, onCardClick} = props;
  return <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it, i) => <Location key={`city-${i}`} loc={it} offers={offers} city={city} onCityClick={onCityClick}/>)}
        </ul>
      </section>
    </div>
    <div className="cities__places-wrapper">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city.name}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <OffersList
            offers={offers}
            places={places}
            onCardClick={onCardClick}
            onCardMouseEnter={onCardMouseEnter}
            onCardMouseOut={onCardMouseOut}
          />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              hoveredCard={hoveredCard}
              offers={offers}
              places={places}
              city={city}
            >
            </Map>
          </section>
        </div>
      </div>
    </div>
  </main>;
};

MainPage.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mapCoordinates: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
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
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardMouseOut: PropTypes.func.isRequired,
  hoveredCard: PropTypes.shape({
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
  }),
  onCardClick: PropTypes.func.isRequired
};

export default withActiveCard(withHoveredCard(MainPage));
