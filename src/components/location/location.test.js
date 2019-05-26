import React from 'react';
import renderer from 'react-test-renderer';
import {Location} from './location.jsx';

const cityLocation = `Amsterdam`;
const city = {
  name: `Amsterdam`,
  mapCoordinates: [52.38333, 4.9],
};

it(`Render Location`, () => {
  const tree = renderer
    .create(<Location
      loc={cityLocation}
      city={city}
      onCityClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
