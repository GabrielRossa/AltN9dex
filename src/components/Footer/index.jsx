import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const style = {
    width: "25rem",
    color: "#FEFEFE"
  }
  
  return (
    <div className='flex justify-center w-screen'>
      <div className='text-end' style={style}>
        <p>© 2023 ALTN9DEX STUDIOS. All rights reserved. </p>
      </div>
      <p className='px-6'>|</p>
      <div className='flex justify-between' style={style}>
        <Link className='link text-white'>ABOUT</Link>
        <Link className='link text-white'>EXPLORE</Link>
        <Link className='link text-white'>PACKAGES</Link>
        <Link className='link text-white'>CONTACT</Link>

      </div>
    </div>
  );
};
