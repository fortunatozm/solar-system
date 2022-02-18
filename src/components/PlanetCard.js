import React from 'react';

class PlanetCard extends React.Component {
  render() {
    return (
      <div data-testid="planet-card">
        <p>
          {planetName}
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

export default PlanetCard;
