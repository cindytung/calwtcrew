import React from 'react';
import Photo from '../components/Photo';

const officers = () => {
  const people = [
    {
      name: 'Lydia Chen',
      position: 'Recruiting Co-Chair / Media Officer',
      email: 'lydiachen@berkeley.edu',
      image: './assets/images/officer_test.png',
    },
    {
      name: 'Lydia Chen',
      position: 'Recruiting Co-Chair / Media Officer',
      email: 'lydiachen@berkeley.edu',
      image: './assets/images/officer-test.png',
    },
    {
      name: 'Lydia Chen',
      position: 'Recruiting Co-Chair / Media Officer',
      email: 'lydiachen@berkeley.edu',
      image: './assets/images/officer-test.png',
    },
    {
      name: 'Lydia Chen',
      position: 'Recruiting Co-Chair / Media Officer',
      email: 'lydiachen@berkeley.edu',
      image: './assets/images/officer-test.png',
    },
    {
      name: 'Lydia Chen',
      position: 'Recruiting Co-Chair / Media Officer',
      email: 'lydiachen@berkeley.edu',
      image: './assets/images/officer-test.png',
    },
    {
      name: 'Lydia Chen',
      position: 'Recruiting Co-Chair / Media Officer',
      email: 'lydiachen@berkeley.edu',
      image: './assets/images/officer-test.png',
    },
    {
      name: 'Lydia Chen',
      position: 'Recruiting Co-Chair / Media Officer',
      email: 'lydiachen@berkeley.edu',
      image: './assets/images/officer-test.png',
    },
    {
      name: 'Lydia Chen',
      position: 'Recruiting Co-Chair / Media Officer',
      email: 'lydiachen@berkeley.edu',
      image: './assets/images/officer-test.png',
    },
  ];

  const officerElements = () => (
    <div className="officers">
      {this.people.map((data) => {
        return <Photo data={people} key={data.name} />
      })}
    </div>
  )
}
