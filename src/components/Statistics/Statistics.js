import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function cap(string) {
  return string[0].toUpperCase() + string.slice(1);
}

// function Statistics(...args) {
// function Statistics({ good, neutral, bad, total, positivePercentage }) {
function Statistics({ total, positivePercentage, ...args }) {
  return (
    <div>
      <ul className={s.list}>
        {Object.keys(args).map(key => (
          <li key={key} className={s.stats}>
            {cap(key)}: {args[key]}
          </li>
        ))}
      </ul>
      <p className={s.countedStats}>Total: {total}</p>
      <p className={s.countedStats}>
        Positive Percentage: {positivePercentage}
      </p>
    </div>
  );
}

Statistics.propTypes = {
  args: PropTypes.arrayOf(
    PropTypes.shape({
      bad: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      good: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      positivePercentage: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
