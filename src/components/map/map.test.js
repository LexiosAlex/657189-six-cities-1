import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from "./map";

const div = global.document.createElement(`div`);
div.setAttribute(`id`, `map`);
global.document.body.appendChild(div);

const offers = [
  {
    id: 1,
    title: `Amsterdam room`,
    isPremium: false,
    img: `img/apartment-01.jpg`,
    price: `140`,
    rating: `90`,
    description: `MockDescription`,
    isBookmarked: false,
    mapCoordinates: [52.3909553943508, 4.85309666406198],
    city: {
      name: `Amsterdam`,
      mapCoordinates: [52.38333, 4.9],
    },
  },
  {
    id: 2,
    title: `Amsterdam room`,
    isPremium: true,
    img: `img/apartment-01.jpg`,
    price: `140`,
    rating: `90`,
    description: `MockDescription`,
    isBookmarked: false,
    mapCoordinates: [52.369553943508, 4.85309666406198],
    city: {
      name: `Amsterdam`,
      mapCoordinates: [52.38333, 4.9],
    },
  },
  {
    id: 3,
    title: `Amsterdam room`,
    isPremium: true,
    img: `img/apartment-01.jpg`,
    price: `140`,
    rating: `90`,
    description: `MockDescription`,
    isBookmarked: false,
    mapCoordinates: [52.3909553943508, 4.929309666406198],
    city: {
      name: `Amsterdam`,
      mapCoordinates: [52.38333, 4.9],
    },
  },
  {
    id: 4,
    title: `Amsterdam room`,
    isPremium: false,
    img: `img/apartment-01.jpg`,
    price: `140`,
    rating: `90`,
    description: `MockDescription`,
    isBookmarked: false,
    mapCoordinates: [52.3809553943508, 4.939309666406198],
    city: {
      name: `Amsterdam`,
      mapCoordinates: [52.38333, 4.9],
    },
  },
];

const city = {
  name: `Amsterdam`,
  mapCoordinates: [52.38333, 4.9],
};


const activeCardMock = null;

describe(`test Map render`, () => {
  it(`Map rendered`, () => {
    const tree = renderer.create(<Map
      city={city}
      offers={offers}
      activeCard={activeCardMock}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
