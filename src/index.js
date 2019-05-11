import React from "react";
import ReactDOM from "react-dom";
import Offers from "./mocks/offers.js";
import Cities from "./mocks/cities.js";

import {App} from "./components/app/app.jsx";

const init = () => {
  const settings = {
    citiesArray: Cities,
    placesArray: Offers,
  };

  ReactDOM.render(
      <App
        cities={settings.citiesArray}
        places={settings.placesArray}
      />,
      document.getElementById(`root`)
  );
};

init();
