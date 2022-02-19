import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { mission: { name, year, country, destination } } = this.props;
    return (
      <div data-testid="mission-card">
        <section data-testid="mission-name">
          {name}
        </section>
        <section data-testid="mission-year">
          {year}
        </section>
        <section data-testid="mission-country">
          {country}
        </section>
        <section data-testid="mission-destination">
          {destination}
        </section>
      </div>
    );
  }
}

MissionCard.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.string,
    country: PropTypes.string,
    destination: PropTypes.string,
  }).isRequired,
};

export default MissionCard;
