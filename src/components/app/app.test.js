import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

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

const offers = [
  {
    id: 1,
    premium: false,
    img: `img/apartment-01.jpg`,
    price: `140`,
    description: `MockDescription`,
  },
  {
    id: 2,
    premium: true,
    img: `img/apartment-01.jpg`,
    price: `140`,
    description: `MockDescription`,
  },
  {
    id: 3,
    premium: true,
    img: `img/apartment-01.jpg`,
    price: `140`,
    description: `MockDescription`,
  },
  {
    id: 4,
    premium: false,
    img: `img/apartment-01.jpg`,
    price: `140`,
    description: `MockDescription`,
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      cities={cities}
      places={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
