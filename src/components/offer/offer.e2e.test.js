import React from 'react';
import Enzyme, {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Offer from "./offer.jsx";

configure({adapter: new Adapter()});

const mockOffer = {
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

let clickHandler;
let placeImage;
let clickPreventDefault;

beforeEach(() => {
  clickHandler = jest.fn();
  const placeElement = mount(
      <Offer
        offer={mockOffer}
        onOfferImgClick={clickHandler}
      />);
  // placeDescription = placeElement.find(`.place-card__name a`);
  placeImage = placeElement.find(`.place-card__image`);
});

it(`image is defined before click`, () => {
  expect(placeImage).toHaveLength(1);
});

it(`after image click`, () => {
  placeImage.simulate(`click`, {
    preventDefault: clickPreventDefault,
  });
  expect(clickPreventDefault).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler.mock.calls[0][0]).toBe(mockOffer);
});


