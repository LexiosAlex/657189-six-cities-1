import {reducer, ActionCreator} from './reducer';

describe(`Reducer works correctly: `, () => {
  it(`if there is no parameters, should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: {
        name: `Amsterdam`,
        mapCoordinates: [52.38333, 4.9],
      },
      offers: [
        {
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
        },
        {
          id: 2,
          title: `Amsterdam room`,
          isPremium: true,
          img: `img/apartment-01.jpg`,
          price: `140`,
          rating: `90`,
          description: `MockDescription`,
          isBookmarked: false,
          mapCoordinates: [52.369553943508, 4.85309666406198],
          city: {
            name: `Amsterdam`,
            mapCoordinates: [52.38333, 4.9],
          },
        },
        {
          id: 3,
          title: `Amsterdam room`,
          isPremium: true,
          img: `img/apartment-01.jpg`,
          price: `140`,
          rating: `90`,
          description: `MockDescription`,
          isBookmarked: false,
          mapCoordinates: [52.3909553943508, 4.929309666406198],
          city: {
            name: `Amsterdam`,
            mapCoordinates: [52.38333, 4.9],
          },
        },
        {
          id: 4,
          title: `Amsterdam room`,
          isPremium: false,
          img: `img/apartment-01.jpg`,
          price: `140`,
          rating: `90`,
          description: `MockDescription`,
          isBookmarked: false,
          mapCoordinates: [52.3809553943508, 4.939309666406198],
          city: {
            name: `Amsterdam`,
            mapCoordinates: [52.38333, 4.9],
          },
        },
      ],
    });
  });
});

describe(`Action creators works correctly: `, () => {
  it(`action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(
        {
          name: `Amsterdam`,
          mapCoordinates: [52.38333, 4.9],
        })).toEqual({
      type: `CHANGE_CITY`,
      payload: {
        name: `Amsterdam`,
        mapCoordinates: [52.38333, 4.9],
      },
    });
  });

  it(`action creator changing offers returns correct action`, () => {
    expect(ActionCreator.changeOffers({
      name: `Amsterdam`,
      mapCoordinates: [52.38333, 4.9],
    }, [
      {
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
      },
      {
        id: 2,
        title: `Amsterdam room`,
        isPremium: true,
        img: `img/apartment-01.jpg`,
        price: `140`,
        rating: `90`,
        description: `MockDescription`,
        isBookmarked: false,
        mapCoordinates: [52.369553943508, 4.85309666406198],
        city: {
          name: `Amsterdam`,
          mapCoordinates: [52.38333, 4.9],
        },
      },
      {
        id: 3,
        title: `Amsterdam room`,
        isPremium: true,
        img: `img/apartment-01.jpg`,
        price: `140`,
        rating: `90`,
        description: `MockDescription`,
        isBookmarked: false,
        mapCoordinates: [52.3909553943508, 4.929309666406198],
        city: {
          name: `Amsterdam`,
          mapCoordinates: [52.38333, 4.9],
        },
      },
      {
        id: 4,
        title: `Amsterdam room`,
        isPremium: false,
        img: `img/apartment-01.jpg`,
        price: `140`,
        rating: `90`,
        description: `MockDescription`,
        isBookmarked: false,
        mapCoordinates: [52.3809553943508, 4.939309666406198],
        city: {
          name: `Amsterdam`,
          mapCoordinates: [52.38333, 4.9],
        },
      },
    ])).toEqual({
      type: `CHANGE_OFFERS`,
      payload: [
        {
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
        },
        {
          id: 2,
          title: `Amsterdam room`,
          isPremium: true,
          img: `img/apartment-01.jpg`,
          price: `140`,
          rating: `90`,
          description: `MockDescription`,
          isBookmarked: false,
          mapCoordinates: [52.369553943508, 4.85309666406198],
          city: {
            name: `Amsterdam`,
            mapCoordinates: [52.38333, 4.9],
          },
        },
        {
          id: 3,
          title: `Amsterdam room`,
          isPremium: true,
          img: `img/apartment-01.jpg`,
          price: `140`,
          rating: `90`,
          description: `MockDescription`,
          isBookmarked: false,
          mapCoordinates: [52.3909553943508, 4.929309666406198],
          city: {
            name: `Amsterdam`,
            mapCoordinates: [52.38333, 4.9],
          },
        },
        {
          id: 4,
          title: `Amsterdam room`,
          isPremium: false,
          img: `img/apartment-01.jpg`,
          price: `140`,
          rating: `90`,
          description: `MockDescription`,
          isBookmarked: false,
          mapCoordinates: [52.3809553943508, 4.939309666406198],
          city: {
            name: `Amsterdam`,
            mapCoordinates: [52.38333, 4.9],
          },
        },
      ],
    });
  });
});
