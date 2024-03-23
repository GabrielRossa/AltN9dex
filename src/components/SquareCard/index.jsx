import React from 'react';
import './styles.css';

export const SquareCard = ({ cardBg, number, title, desc }) => {
  return (
    <div id='square' className={`${title} sq-card relative text-center`} style={{ width: '18rem', height: '18rem' }}>
      <div className='z-0 w-full h-full opacity-50' style={{ background: `url(${cardBg}) no-repeat`, backgroundSize: 'contain' }}></div>
      <div id='card-content' className='z-10 flex flex-col justify-center items-center absolute top-0 w-full h-full items-center justify-center'>
        <p id='number' className=' text-9xl opacity-25 w-fit' style={{ fontFamily: 'Times New Roman, serif' }}>{number}</p>
        <h3 id='phase' className='text-3xl font-bold absolute'>{title}</h3>
        <p id='desc' className='w-4/5 opacity-0 text-center absolute'>{desc}</p>
      </div>
    </div>
  );
};
