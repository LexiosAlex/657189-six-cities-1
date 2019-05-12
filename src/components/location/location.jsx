import React from "react";
import PropTypes from "prop-types";

export const Location = (props) => {
  const {loc} = props;
  return <li className="locations__item">
    <a className={`${loc.active ? `tabs__item--active` : ``} locations__item-link tabs__item`} href="#">
      <span>{loc.city}</span>
    </a>
  </li>;
};

Location.propTypes = {
  loc: PropTypes.object.isRequired,
};
