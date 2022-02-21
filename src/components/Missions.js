import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((missi) => (<MissionCard
          key={ missi.name }
          name={ missi.name }
          year={ missi.year }
          country={ missi.country }
          destination={ missi.destination }
        />))}
      </div>
    );
  }
}

export default Missions;
