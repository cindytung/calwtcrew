import React from 'react';
import Photo from '../components/Photo';
// import tori from '../assets/images/officers/tori.jpg';
// import ishaan from '../assets/images/officers/ishaan.png';
// import chris from '../assets/images/officers/chris.png';
// import hannah from '../assets/images/officers/hannah.jpg';
// import lydia from '../assets/images/officers/lydia.jpg';
// import amos from '../assets/images/officers/amos.png';
// import reni from '../assets/images/officers/reni.png';
// import peter from '../assets/images/officers/peter.jpg';
// import colby from '../assets/images/officers/colby.jpg';
import duck from '../assets/images/officer_test.png';

const Officers = () => {
  const people = [
    {
      name: 'Tori Cabot',
      position: 'President',
      email: 'tcabot@berkeley.edu',
      image: duck,
    },
    {
      name: 'Ishaan Golding',
      position: 'Treasurer',
      email: 'ishaangolding@berkeley.edu',
      image: duck,
    },
    {
      name: 'Chris Webster',
      position: 'Equipment Officer',
      email: 'cwebster786@berkeley.edu',
      image: duck,
    },
    {
      name: 'Hannah Rudoff',
      position: 'Recruiting Co-Chair / Social Co-Chair',
      email: 'hannah.rudoff@berkeley.edu',
      image: duck,
    },
    {
      name: 'Lydia Chen',
      position: 'Recruiting Co-Chair / Media Officer',
      email: 'lydiachen@berkeley.edu',
      image: duck,
    },
    {
      name: 'Amos Frank',
      position: 'Social Co-Chair',
      email: 'amos.frank@berkeley.edu',
      image: duck,
    },
    {
      name: 'Reni Forer',
      position: 'Fundraising Chair',
      email: 'reni.forer@berkeley.edu',
      image: duck,
    },
    {
      name: 'Peter Birghoffer',
      position: 'Men\'s Travel Officer',
      email: 'peterbirghoffer@berkeley.edu',
      image: duck,
    },
    {
      name: 'Colby Gekko',
      position: 'Women\'s Travel Officer',
      email: 'cegekko@berkeley.edu',
      image: duck,
    },
  ];

  return (
    <div className="officers">
      {people.map((person) => (
        <div className="officer__container">
          <Photo data={person} />
        </div>
      ))}
    </div>
  );
};

export default Officers;
