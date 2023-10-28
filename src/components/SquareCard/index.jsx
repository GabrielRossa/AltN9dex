import React from 'react';

import './styles.css';
import { Tiktoks } from './../Tiktoks/index';

export const SquareCard = ({ cardBg, title, type, desc }) => {
  const styleCard = {
    width: '31rem',
    height: '30rem'
  }

  return (
    <div className={`${title} sq-card`} style={styleCard}>
      <div className='h-1/2 w-full' style={{ background: `url(${cardBg}), no-repeat` }}>
        <div id='tk-wrapper'>
          <Tiktoks type={title} />
        </div>
      </div>
      <div className='h-1/2 flex flex-col justify-center items-center'>
        <p className='font-bold text-sm mb-4'>{type}</p>
        <h3 className='text-3xl font-bold mb-8' style={{ fontFamily: 'Times New Roman, serif' }}>{title}</h3>
        <p className='w-3/5 text-center'>{desc}</p>
      </div>
    </div>
  );
};
