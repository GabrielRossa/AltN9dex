import React from 'react';
import tk1 from '../../assets/tk1.png'
import tk2 from '../../assets/tk2.png'
import tk3 from '../../assets/tk3.png'
import tk4 from '../../assets/tk4.png'
import tk5 from '../../assets/tk5.png'
import clock from '../../assets/clock.svg'
import bonus from '../../assets/bonus.png'


import './styles.css';

export const Tiktoks = ({type}) => {
  return (
    <div id='pack-tk' className={`${type} flex align-center justify-center`}>
      <img id='bonus' className='icon absolute' src={bonus} alt="" />
      <img id='clock' className='icon absolute' src={clock} alt="" />
      <img id='tk5' className='tk absolute' src={tk5} alt="" />
      <img id='tk4' className='tk absolute' src={tk4} alt="" />
      <img id='tk3' className='tk absolute' src={tk3} alt="" />
      <img id='tk2' className='tk absolute' src={tk2} alt="" />
      <img id='tk1' className='tk absolute' src={tk1} alt="" />
    </div>
  );
};
