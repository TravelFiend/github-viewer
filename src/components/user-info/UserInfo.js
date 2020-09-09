import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserInfo } from '../../selectors/userInfoSelectors';
import styles from './UserInfo.css';

const UserInfo = () => {
  const userInfo = useSelector(getUserInfo);

  return (
    <section className={styles.UserInfo}>
      {userInfo.login !== undefined && <span>{userInfo.login}</span>}
      <img src={userInfo.avatar_url} />
      <span>Followers: {userInfo.followers}</span>
      <span>Following: {userInfo.following}</span>
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
