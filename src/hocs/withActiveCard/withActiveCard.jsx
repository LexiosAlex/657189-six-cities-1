import React from 'react';

function withActiveCard(Component) {
  class WithActiveCard extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
      };
    }

    render() {
      return <Component
        {...this.props}
        activeCard={this.state.activeCard}
        onOfferImgClick={(card)=> {
          this.setState({
            activeCard: card
          });
        }}
      />;
    }
  }
  return WithActiveCard;
}

export {withActiveCard};
