import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withActiveCard} from './withActiveCard.jsx';

Enzyme.configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapped = withActiveCard(Mock);

it(`activating offer card properly`, () => {
  const wrapper = shallow(<MockWrapped
    activeCard={{}}
    onCardClick={jest.fn()}
  />);


  expect(wrapper.state().activeCard).toEqual(null);
  expect(wrapper.props().activeCard).toEqual(null);
  wrapper.props().onCardClick({
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
  });
  expect(wrapper.state().activeCard).toEqual({
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
  });
  expect(wrapper.props().activeCard).toEqual({
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
  });
});
