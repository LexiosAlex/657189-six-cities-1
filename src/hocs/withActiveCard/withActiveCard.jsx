import React from 'react';
import PropTypes from "prop-types";

function withActiveCard(Component) {
  class WithActiveCard extends React.Component {
    constructor(props) {
      super(props);
      this.getActiveCard = this._getActiveCard.bind(this);

      this.state = {
        activeCard: null,
      };
    }

    render() {
      return <Component
        {...this.props}
        activeCard={this.state.activeCard}
        onCardClick={this.getActiveCard}
      />;
    }

    _getActiveCard(card) {
      this.setState({
        activeCard: card
      });
    }
  }

  WithActiveCard.propTypes = {
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      mapCoordinates: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    onCityClick: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    places: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isBookmarked: PropTypes.bool.isRequired,
      mapCoordinates: PropTypes.arrayOf(PropTypes.number),
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        mapCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
      }).isRequired,
    })).isRequired,
    offers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isBookmarked: PropTypes.bool.isRequired,
      mapCoordinates: PropTypes.arrayOf(PropTypes.number),
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        mapCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
      }).isRequired,
    })).isRequired,
  };
  return WithActiveCard;
}

export {withActiveCard};
