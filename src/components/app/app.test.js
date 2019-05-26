import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const div = global.document.createElement(`div`);
div.setAttribute(`id`, `map`);
global.document.body.appendChild(div);

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

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

const activeCard = {
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
};

const places = offers;
const city = {
  name: `Amsterdam`,
  mapCoordinates: [52.38333, 4.9],
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      activeCard={activeCard}
      cities={cities}
      places={places}
      offers={offers}
      city={city}
      onCityClick = {jest.fn()}
      onActiveCard = {jest.fn()}
      onDeactiveCard = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
