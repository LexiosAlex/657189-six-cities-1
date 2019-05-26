const initialState = {
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
  ]
};

const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: `CHANGE_CITY`,
    payload: selectedCity,
  }),
  changeOffers: (selectedCity, offers) => {
    let filteredOffers = offers.filter((it) => it.city.name === selectedCity.name);

    return {
      type: `CHANGE_OFFERS`,
      payload: filteredOffers,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`: return Object.assign({}, state, {
      city: action.payload,
    });

    case `CHANGE_OFFERS`: return Object.assign({}, state, {
      offers: action.payload,
    });
  }
  return state;
};

export {reducer, ActionCreator};


