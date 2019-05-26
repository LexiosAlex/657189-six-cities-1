import React from "react";
import PropTypes from "prop-types";

export const Location = (props) => {
  const {loc, city, onCityClick} = props;
  return <li className="locations__item" onClick={()=>onCityClick(loc)}>
    <a className={`${loc === city.name ? `tabs__item--active` : ``} locations__item-link tabs__item`} href="#">
      <span>{loc}</span>
    </a>
  </li>;
};

Location.propTypes = {
  loc: PropTypes.string.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mapCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

