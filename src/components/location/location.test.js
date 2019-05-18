import React from 'react';
import renderer from 'react-test-renderer';
import {Location} from './location.jsx';

const cityLocation = {
  city: `Paris`
};

it(`Render Location`, () => {
  const tree = renderer
    .create(<Location
      loc={cityLocation}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
