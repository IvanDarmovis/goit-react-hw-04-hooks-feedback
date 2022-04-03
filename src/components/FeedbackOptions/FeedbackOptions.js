import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function cap(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(key => (
    <button
      type="button"
      name={key}
      key={key}
      className={s.button}
      onClick={onLeaveFeedback}
    >
      {cap(key)}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
