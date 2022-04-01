import React from 'react';
import s from './Statistics.module.css';

function cap(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function Statistics(...args) {
  return Object.keys(args[0]).map(key => (
    <p key={key}>
      {cap(key)}: {args[0][key]}
    </p>
  ));
}

export default Statistics;
