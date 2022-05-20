import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ total, percentage, ...reviews }) {
  return (
    <ul className={s.statList}>
      {Object.keys(reviews).map(review => {
        return (
          <li className={s.statItem} key={review}>
            {review[0].toUpperCase() + review.substring(1)}:{' '}
            <span className={s.count}>{reviews[review]}</span>
          </li>
        );
      })}
      <li className={s.statItem}>
        Total: <span className={s.count}>{total}</span>
      </li>
      <li className={s.statItem}>
        Positive feedback: <span className={s.count}>{percentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
