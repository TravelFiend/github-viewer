import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserInfo.css';

const UserInfo = ({ name, followerCount, followingCount, login }) => (
  <section className={styles.UserInfo}>
    <span>{name}</span>
    <span>{followerCount}</span>
    <span>{followingCount}</span>
    <span><a href={`https://github.com/${login}`}>{login}</a></span>
  </section>
);

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired
};

export default UserInfo;
