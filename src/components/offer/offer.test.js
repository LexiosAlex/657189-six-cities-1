import React from 'react';
import renderer from 'react-test-renderer';
import {Offer} from './offer.jsx';

const placeMock = {
  id: 1,
  premium: false,
  img: `img/apartment-01.jpg`,
  price: `140`,
  description: `MockDescription`,
  mapCoordinates: [52.3909553943508, 4.85309666406198],
};

it(`Render offer`, () => {
  const tree = renderer
    .create(<Offer
      place={placeMock}
      onActiveCard={jest.fn()}
      onDeactiveCard={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
