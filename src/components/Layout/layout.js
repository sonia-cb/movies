// CommonLayout.js

import React from 'react';

import {FooterWave1 ,FooterWave2 } from '../../assets/images';
import './style.css';

const CommonLayout = (props) => {
  return (
    <div className='pageBG'>
      <main>
        {props.children}
      </main>
      <div className='footer-image'>
        <img src={FooterWave1} alt='footer wave 1' />
        <img src={FooterWave2} alt='footer wave 2'/>
      </div>
    </div>
  );
};


export default CommonLayout;
