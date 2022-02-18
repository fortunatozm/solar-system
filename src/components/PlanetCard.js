import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planeta: { name: planetName, image: planetImage } } = this.props;
    return (
      <div data-testid="planet-card">
        <h3>
          {planetName}
        </h3>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planeta: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default PlanetCard;
