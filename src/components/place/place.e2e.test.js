import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Place} from "./place.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Simulate click events in place`, () => {
  const clickHandler = jest.fn();
  const placeElement = shallow(<Place
    place={{}}
    onClick={jest.fn()}
  />);

  const placeHeader = placeElement.find(`h2.place-card__name`);
  placeHeader.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(0);
});
