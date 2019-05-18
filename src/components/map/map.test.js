import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from "./map";

const div = global.document.createElement(`div`);
div.setAttribute(`id`, `map`);
global.document.body.appendChild(div);

const offersMock = [
  {
    id: 2,
    premium: true,
    img: `img/apartment-01.jpg`,
    price: `140`,
    description: `MockDescription`,
    mapCoordinates: [52.369553943508, 4.85309666406198],
  }
];

const activeCardMock = null;

describe(`test Map render`, () => {
  it(`Map rendered`, () => {
    const tree = renderer.create(<Map
      activeCard={activeCardMock}
      places={offersMock}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
