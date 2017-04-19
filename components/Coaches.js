import React from 'react';
import Photo from '../components/Photo';
import duck from '../assets/images/officer_test.png';

const Coaches = () => {
  const people = [
    {
      name: 'Marjorie Setchko',
      position: 'Women\'s Head Coach',
      email: '',
      image: duck,
    },
    {
      name: 'Douglas Perez',
      position: 'Men\'s Head Coach',
      email: '',
      image: duck,
    },
  ];

  return (
    <div className="coaches">
      {people.map((person) => (
        <div className="coach__container">
          <Photo data={person} />
        </div>
      ))}
    </div>
  );
};

export default Coaches;
