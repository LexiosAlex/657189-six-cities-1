import React from "react";

import {MainPage} from "../main-page/main-page.jsx";

export const App = (places) => {

  return <MainPage
    cities={places}
  />;
};
