import React from 'react';
// import { Link } from 'react-router';
// import { prefixLink } from 'gatsby-helpers';
import Officers from '../components/Officers';
import team from '../assets/images/team.jpg';

const AboutComponent = () => (
  <div>
    <img id="team" alt="" src={team} />
    <Officers />
  </div>
);

export default AboutComponent;
