import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      cities={[{}]}
      places={[{}]}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
