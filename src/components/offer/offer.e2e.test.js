import React from 'react';
import Enzyme, {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Offer} from "./offer.jsx";

configure({adapter: new Adapter()});

const placeMock = {
  id: 1,
  premium: false,
  img: `img/apartment-01.jpg`,
  price: `140`,
  description: `MockDescription`,
};

Enzyme.configure({adapter: new Adapter()});

it(`Simulate click events in Offer`, () => {
  const clickHandler = jest.fn();
  const clickDeActivateHandler = jest.fn();
  const clickPreventDefault = jest.fn();
  const placeElement = mount(<Offer
    place={placeMock}
    onActiveCard={clickHandler}
    onDeactiveCard={clickDeActivateHandler}
  />);

  const placeHeader = placeElement.find(`h2.place-card__name`);
  placeHeader.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(0);

  const placeImage = placeElement.find(`img.place-card__image`);
  placeImage.simulate(`click`, {
    preventDefault: clickPreventDefault,
  });
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickPreventDefault).toHaveBeenCalledTimes(1);
  expect(clickHandler.mock.calls[0][0]).toBe(placeMock);

  const placeCard = placeElement.find(`article.cities__place-card`);
  placeCard.simulate(`mouseover`, {});
  expect(clickDeActivateHandler).toHaveBeenCalledTimes(1);
});

// expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

