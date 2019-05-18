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
  mapCoordinates: [52.3909553943508, 4.85309666406198],
};

Enzyme.configure({adapter: new Adapter()});

it(`Simulate events in Offer`, () => {
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
  expect(clickPreventDefault).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler.mock.calls[0][0]).toBe(placeMock);

  const placeCard = placeElement.find(`article.cities__place-card`);
  placeCard.simulate(`mouseover`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(2);
});
