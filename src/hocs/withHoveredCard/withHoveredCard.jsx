import React from 'react';
import PropTypes from "prop-types";

function withHoveredCard(Component) {
  class WithHoveredCard extends React.Component {
    constructor(props) {
      super(props);
      this.onCardMouseEnter = this._onCardMouseEnter.bind(this);
      this.onCardMouseOut = this._onCardMouseOut.bind(this);

      this.state = {
        hoveredCard: null,
      };
    }

    render() {
      return <Component
        {...this.props}
        hoveredCard={this.state.hoveredCard}
        onCardMouseEnter={this.onCardMouseEnter}
        onCardMouseOut={this.onCardMouseOut}
      />;
    }

    _onCardMouseEnter(card) {
      this.setState({
        hoveredCard: card
      });
    }

    _onCardMouseOut() {
      this.setState({
        hoveredCard: null
      });
    }
  }

  WithHoveredCard.propTypes = {
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
    hoveredCard: PropTypes.shape({
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
    }),
    onCardClick: PropTypes.func.isRequired
  };
  return WithHoveredCard;
}

export {withHoveredCard};
