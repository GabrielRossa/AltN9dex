import React from 'react';

import finalBg from '../../assets/bmw.png'
import './styles.css';
import { Footer } from './../Footer/index';
import { Link } from 'react-router-dom';
import chevronRight from '../../assets/chevron-right-red.svg'


export const FinalSection = () => {
  return (
    <section className='w-screen h-screen' style={{ backgroundColor: '#0B0B0D' }}>
      <div className='w-full mb-12 realative flex flex-col items-center justify-between' style={{ backgroundImage: `url(${finalBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: 'calc(100vh - 3rem)' }}>
        <div className='mt-32'>
          <p className='text-3xl mb-4' style={{ fontFamily: 'Times New Roman, serif' }}>Transforme suas ideias em experiências audiovisuais extraordinárias.</p>
          <Link to="" className='flex button-more justify-center align-center text-lg' style={{ color: '#F12233' }}>
            <p>ENTRAR EM CONTATO</p>
            <img src={chevronRight} alt="" className='w-6' />
          </Link>
        </div>

        <Footer />

      </div>
    </section>
  );
};
