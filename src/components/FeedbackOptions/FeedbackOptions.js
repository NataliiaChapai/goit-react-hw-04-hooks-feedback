import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      type="button"
      name={option}
      className={s.statBtn}
      onClick={onLeaveFeedback}
      key={option}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
