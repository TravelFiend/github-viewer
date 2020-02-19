import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUserInfo } from '../../actions/userInfoActions';
import { getUserInfo, getUserName } from '../../selectors/userInfoSelectors';
import styles from './UserInfo.css';

const UserInfo = () => {
  const dispatch = useDispatch();
  const username = useSelector(getUserName);
  const userInfo = useSelector(getUserInfo);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  return (
    <section className={styles.UserInfo}>
      <span>{userInfo.login}</span>
      <span>Followers: {userInfo.followers}</span>
      <span>Following: {userInfo.following}</span>
      {/* <span><a href={profileUrl}>{profileUrl}</a></span> */}
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
