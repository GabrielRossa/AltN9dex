import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  
  return (
    <div className='sm:flex justify-center w-screen absolute bottom-4 hidden'>
      <div className='side text-end flex md:justify-end justify-center'>
        <p className='w-fit md:text-base text-xs'>© 2024 HOKAIZ MEDIA. All rights reserved. </p>
      </div>
      <p className='px-6 w-fit hidden md:block'>|</p>
      <div className='side md:flex justify-between hidden'>
        <Link className='link text-white' to="/about">SOBRE</Link>
        <Link className='link text-white' to="/explore">GALERIA</Link>
        <Link className='link text-white' to="/skills">SKILLS</Link>
        <Link className='link text-white' to="/contact">CONTATO</Link>
      </div>
    </div>
  );
};
