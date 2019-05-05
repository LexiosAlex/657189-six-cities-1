import React from 'react';
import renderer from 'react-test-renderer';
import {Location} from './location.jsx';

it(`Render Location`, () => {
  const tree = renderer
    .create(<Location
      loc={{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
