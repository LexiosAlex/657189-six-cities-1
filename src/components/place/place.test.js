import React from 'react';
import renderer from 'react-test-renderer';
import {Place} from './place.jsx';

it(`Render Place`, () => {
  const tree = renderer
    .create(<Place
      place={{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
