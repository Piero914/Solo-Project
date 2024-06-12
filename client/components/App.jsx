import React, { Component } from 'react';
import Logo, { Component } from './Logo';
import MainContainer, { Component } from './MainContainer';

const App = () => {
  return (
    <div className='App'>
      {Logo}
      <Logo />
      <MainContainer />
    </div>
  );
};

export default App;
