import React from 'react';
import Header from '../components/header/Header';
import UsernameInput from '../components/username-input/UsernameInput';
import UserInfo from '../components/user-info/UserInfo';
import Repos from '../components/repos/Repos';

const GithubViewer = () => (
  <>
    <Header />
    <UsernameInput />
    <UserInfo />
    <Repos />
  </>
);

export default GithubViewer;
