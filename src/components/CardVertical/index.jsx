import React from 'react';

import './styles.css';


export const CardVertical = ({car, title, desc, center}) => {
  const styleCard = {
    height: '30rem',
    background: `url(${car}), no-repeat`,
    backgroundSize: 'cover',
  }
  
  return (
    <div className={`flex flex-col items-center justify-end py-12 w-80 ${center ? "mx-9" : ""}`} style={ styleCard }>
      <h3 className='text-3xl mb-4 font-bold' style={{fontFamily: 'Times New Roman, serif'}}>{title}</h3>
      <p className='text-sm font-semibold'>{desc}</p>
    </div>
  );
};
