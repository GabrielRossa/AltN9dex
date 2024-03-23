import React from 'react';

import './styles.css';


export const CardVertical = ({car, title, desc, center}) => {
  const styleCard = {
    height: '30rem',
    background: `url(${car}), no-repeat`,
    backgroundSize: 'cover',
  }
  
  return (
    <div id='vertical' className={`relative flex flex-col items-center justify-end py-12 w-80 text-center ${center ? "mx-9" : ""}`} style={ styleCard }>
      <h3 className='text-3xl font-bold' style={{fontFamily: 'Times New Roman, serif'}}>{title}</h3>
      <p className='text-sm font-semibold absolute opacity-0'>{desc}</p>
    </div>
  );
};
