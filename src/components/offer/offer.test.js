import React from 'react';
import renderer from 'react-test-renderer';
import {Offer} from './offer.jsx';

const offer = {
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
};

it(`Render offer`, () => {
  const tree = renderer
    .create(<Offer
      offer={offer}
      onCardMouseEnter={jest.fn()}
      onCardMouseOut={jest.fn()}
      onCardClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
