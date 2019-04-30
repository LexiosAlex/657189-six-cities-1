import React from "react";
import PropTypes from "prop-types";

import {MainPage} from "../main-page/main-page.jsx";

export const App = (places) => {

  return <MainPage
    cities={places}
  />;
};
