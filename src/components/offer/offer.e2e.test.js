import React from 'react';
import Enzyme, {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Offer} from "./offer.jsx";

configure({adapter: new Adapter()});

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

Enzyme.configure({adapter: new Adapter()});

it(`Simulate events in Offer`, () => {
  const clickHandler = jest.fn();
  const hoverHandler = jest.fn();
  const hoverDeActivateHandler = jest.fn();
  const hoverPreventDefaault = jest.fn();
  const clickPreventDefault = jest.fn();
  const placeElement = mount(<Offer
    offer={offer}
    onCardMouseEnter={hoverHandler}
    onCardMouseOut={hoverDeActivateHandler}
    onCardClick={clickHandler}
  />);

  const placeHeader = placeElement.find(`h2.place-card__name`);
  placeHeader.simulate(`click`, {
    preventDefault: clickPreventDefault,
  });
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickPreventDefault).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler.mock.calls[0][0]).toBe(offer);

  const placeCard = placeElement.find(`article.cities__place-card`);
  placeCard.simulate(`mouseover`, {
    preventDefault: hoverPreventDefaault,
  });
  expect(hoverPreventDefaault).toHaveBeenCalledTimes(1);
  expect(hoverHandler).toHaveBeenCalledTimes(1);
  expect(hoverHandler.mock.calls[0][0]).toBe(offer);
});
