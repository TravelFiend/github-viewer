import React from 'react';
import UsernameInput from '../components/username-input/UsernameInput';
import UserInfo from '../components/user-info/UserInfo';
import Repos from '../components/repos/Repos';

const GithubViewer = () => (
  <>
    <UsernameInput />
    <UserInfo />
    <Repos />
  </>
);

export default GithubViewer;
