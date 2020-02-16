import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUserInfo } from '../../actions/userInfoActions';
import { getUserInfo } from '../../selectors/userInfoSelectors';
import styles from './UserInfo.css';

const UserInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  });

  return (
    <section className={styles.UserInfo}>
      <span>{name}</span>
      <span>{followers}</span>
      <span>{following}</span>
      <span><a href={profileUrl}>{profileUrl}</a></span>
    </section>
  );
};

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired
};

export default UserInfo;
