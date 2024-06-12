import React, { Component } from 'react';
import Logo, { Component } from './Logo';
import MainContainer, { Component } from './MainContainer';

const Logo = () => {
  return (
    <div className='container'>
      <h2 id='header' style='../scss/styles.scss'>
        AVATAR MAKER
      </h2>
      <img src='../../assets/logo/Logo 1.jpg' />
    </div>
  );
};

export default Logo;
