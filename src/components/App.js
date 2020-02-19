import React from 'react';
import UsernameInput from './username-input/UsernameInput';
import UserInfo from './user-info/UserInfo';
import Header from './header/Header';

export default function App() {
  return (
    <>
      <Header />
      <UsernameInput />
      <UserInfo name={'Frogs'} followerCount={3} followingCount={5} login={'Frogs'} />
    </>
  );
}
