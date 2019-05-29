import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withHoveredCard} from './withHoveredCard.jsx';

Enzyme.configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapped = withHoveredCard(Mock);

it(`Change hovered element properly`, () => {
  const wrapper = shallow(<MockWrapped
    hoveredCard={{}}
    onCardMouseEnter={jest.fn()}
    onCardMouseOut={jest.fn()}
  />);

  expect(wrapper.state().hoveredCard).toEqual(null);
  expect(wrapper.props().hoveredCard).toEqual(null);
  wrapper.props().onCardMouseEnter({
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
  expect(wrapper.state().hoveredCard).toEqual({
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
  expect(wrapper.props().hoveredCard).toEqual({
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
