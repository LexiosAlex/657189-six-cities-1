import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from './main-page.jsx';

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

it(`Render MainPage`, () => {
  const tree = renderer
    .create(<MainPage
      cities={cities}
      places={offers}
      onActiveCard={jest.fn()}
      onDeactiveCard={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
