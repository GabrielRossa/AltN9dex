import React from 'react';

import finalBg from '../../assets/final-bg.png'
import './styles.css';
import { Footer } from './../Footer/index';

export const FinalSection = () => {
  return (
    <section className='w-screen h-screen' style={{ backgroundColor: '#0B0B0D' }}>
      <div className='w-full mb-12 realative flex items-end' style={{ backgroundImage: `url(${finalBg})`, backgroundRepeat: 'no-repeat',backgroundPosition: 'center', backgroundSize: 'contain', height: 'calc(100vh - 3rem)' }}>

        <Footer />

      </div>
    </section>
  );
};
