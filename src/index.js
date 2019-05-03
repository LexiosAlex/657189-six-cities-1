import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app.jsx";

const cities = [
  {
    city: `Paris`
  },
  {
    city: `Cologne`
  },
  {
    city: `Brussels`
  },
  {
    city: `Amsterdam`,
    active: true
  },
  {
    city: `Hamburg`
  },
  {
    city: `Dusseldorf`
  }
];

const places = [
  {
    premium: false,
    img: `img/apartment-01.jpg`,
    price: `140`,
    description: `MockDescription`,
  },
  {
    premium: true,
    img: `img/apartment-01.jpg`,
    price: `140`,
    description: `MockDescription`,
  },
  {
    premium: true,
    img: `img/apartment-01.jpg`,
    price: `140`,
    description: `MockDescription`,
  },
  {
    premium: false,
    img: `img/apartment-01.jpg`,
    price: `140`,
    description: `MockDescription`,
  }
];

const init = () => {
  const settings = {
    citiesArray: cities,
    placesArray: places,
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
