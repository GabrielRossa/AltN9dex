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
        <p>© 2024 HOKAIZ MEDIA. All rights reserved. </p>
      </div>
      <p className='px-6'>|</p>
      <div className='flex justify-between' style={style}>
        <Link className='link text-white' to={"/about"}>SOBRE</Link>
        <Link className='link text-white' to={"/explore"}>EXPLORE</Link>
        <Link className='link text-white'>SKILLS</Link>
        <Link className='link text-white'>CONTATO</Link>
      </div>
    </div>
  );
};
