import React from 'react';

import './styles.css';
import { Header } from './../Header/index';
import { CardVertical } from '../CardVertical';
import maserati from '../../assets/maserati.png'
import porsche75 from '../../assets/porsche75.png'
import porscheTurbo from '../../assets/porsche-turbo.png'
import { Link } from 'react-router-dom';
import chevronRight from '../../assets/chevron-right-red.svg'


export const ExploreSection = () => {
  return (
    <section className='w-screen h-screen flex flex-col px-52 items-center' style={{ backgroundColor: '#0B0B0D' }}>
      <Header title="Nosso trabalho" desc="Sempre entregando o conteúdo mais autêntico para você, tanto em qualidade, transmissão de sentimento, design de som, roteiro... E tudo pensado nos mínimos detalhes
" />

      <div className='flex mb-12 w-full justify-center gap-x-10'>
        <CardVertical car={maserati} title="Fotografia" desc="Maserati MC20"/>
        <CardVertical car={porscheTurbo} title="Vídeo" desc="Porsche 911 Turbo"/>
        <CardVertical car={porsche75} title="Edição" desc="Porsche 911 Targa (1975)"/>
      </div>

      <Link to="" className='flex button-more justify-center align-center' style={{color: '#F12233'}}>
        <p>VER MAIS</p>
        <img src={chevronRight} alt="" className='w-6'/>
      </Link>
    </section>
  );
};
