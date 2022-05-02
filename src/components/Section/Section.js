import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <div className={s.section}>
      <p className={s.title}>{title}</p>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;
