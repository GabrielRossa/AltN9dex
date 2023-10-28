import React from 'react';

import './styles.css';
import { Header } from './../Header/index';
import { CardVertical } from '../CardVertical';
import bmw from '../../assets/bmw.png'
import ferrari from '../../assets/ferrari.png'
import supra from '../../assets/supra.png'
import { Link } from 'react-router-dom';
import chevronRight from '../../assets/chevron-right-1.svg'


export const ExploreSection = () => {
  return (
    <section className='w-screen h-screen flex flex-col px-52 items-center' style={{ backgroundColor: '#0B0B0D' }}>
      <Header title="Explore my World" desc="I try to provide the most authentic content for you, both in quality, transmission of feelings, audio FX and video technical requirements." />

      <div className='flex mb-12 w-full justify-between'>
        <CardVertical car={bmw} title="Clean Vibe" desc="BMW M4"/>
        <CardVertical car={supra} title="Agressive Vibe" desc="Toyota Supra"/>
        <CardVertical car={ferrari} title="Pop Vibe" desc="Ferrari 458 GT3"/>
      </div>

      <Link to="" className='flex button-more' style={{color: '#0065FD'}}>
        <p>SEE MORE</p>
        <img src={chevronRight} alt="" />
      </Link>
    </section>
  );
};
