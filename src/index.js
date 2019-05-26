import React from "react";
import ReactDOM from "react-dom";
import Offers from "./mocks/offers.js";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './reducer';
import {WrappedApp} from "./components/app/app.jsx";

const getCities = (offers) => {
  let cities = new Set();
  offers.forEach((it)=> {
    cities.add(it.city.name);
  });
  return Array.from(cities);
};

const init = () => {
  const settings = {
    citiesArray: getCities(Offers),
    placesArray: Offers,
  };
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <WrappedApp
          cities={settings.citiesArray}
          places={settings.placesArray}
        />
      </Provider>,
      document.getElementById(`root`)
  );
};

init();
