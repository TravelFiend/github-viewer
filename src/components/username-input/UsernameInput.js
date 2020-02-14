import React from 'react';
import PropTypes from 'prop-types';
import styles from './UsernameInput.css';

const UsernameInput = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit} className={styles.Form}>
    <label htmlFor="unIpnut" onChange={onChange}>Enter a Github username: </label>
    <input type="text" id="unInput" />
    <button>Submit</button>
  </form>
);

UsernameInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default UsernameInput;
