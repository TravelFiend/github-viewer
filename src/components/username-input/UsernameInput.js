import React, { useEffect } from 'react';
import styles from './UsernameInput.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, fetchUserInfo } from '../../actions/userInfoActions';
import { getUserName, getUserInfo } from '../../selectors/userInfoSelectors';

const UsernameInput = () => {
  const dispatch = useDispatch();
  const username = useSelector(getUserName);

  const handleChange = ({ target }) => {
    dispatch(setUsername(target.value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchUserInfo(username));
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <label htmlFor="unIpnut">Enter a Github username: </label>
      <input type="text" id="unInput" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default UsernameInput;
