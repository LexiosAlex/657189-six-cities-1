import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from './main-page.jsx';

it(`Render MainPage`, () => {
  const tree = renderer
    .create(<MainPage
      cities={[{}]}
      places={[{}]}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
