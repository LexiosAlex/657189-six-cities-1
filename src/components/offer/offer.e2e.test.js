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
  const placeElement = mount(<Offer
    place={placeMock}
    onActiveCard={jest.fn()}
    onDeactiveCard={jest.fn()}
  />);

  const placeHeader = placeElement.find(`h2.place-card__name`);
  placeHeader.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(0);

  const activateCard = jest.fn();
  const placeImage = placeElement.find(`img.place-card__image`);
  placeImage.simulate(`click`, {
    preventDefault: activateCard,
  });
  expect(placeImage).toHaveBeenCalledTimes(1);

  const placeCard = placeElement.find(`article.cities__place-card`);
  placeCard.simulate(`mouseover`, {
    preventDefault: activateCard,
  });
  expect(placeCard).toHaveBeenCalledTimes(1);
});
