import React from 'react';
import Officers from '../components/Officers';
import team from '../assets/images/team.jpg';

const IndexComponent = () => (
  <div>
    <div className="section__header">
      ABOUT US
    </div>
    <img id="team" alt="" src={team} />
    <Officers />
  </div>
);

export default IndexComponent;
