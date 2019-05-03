import React from "react";
import PropTypes from "prop-types";

import {MainPage} from "../main-page/main-page.jsx";
export const App = (props) => {
  const {cities, places} = props;

  return <MainPage
    cities={cities}
    places={places}
  />;
};

App.propTypes = {
  cities: PropTypes.array,
  places: PropTypes.array,
};
