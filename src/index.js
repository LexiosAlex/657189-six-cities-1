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

const init = () => {
  const settings = {
    cities: cities,
  };

  ReactDOM.render(
      <App
        cities={settings.cities}
      />,
      document.getElementById(`root`)
  );
};

init();
