import React from 'react';
import UsernameInput from './username-input/UsernameInput';
import UserInfo from './user-info/UserInfo';
import Header from './header/Header';

export 

default function App() {
  return (
    <>
      <Header />
      <UsernameInput onSubmit={() => {}} onChange={() => {}} />
      <UserInfo name={'Frogs'} followerCount={'Frogs'} followingCount={'Frogs'} login={'Frogs'} />
    </>
  );
}
