import React from 'react'
import { Navbar } from '../../components/Navbar'
import hokaiz700 from '../../assets/hokaiz-700.png'
import { Footer } from '../../components/Footer'

import './styles.css'

export const About = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className='overflow-y-hidden w-screen sm:h-screen sm:my-0 my-8 flex justify-center items-center'>
        <div className='flex lg:flex-row flex-col h-fit gap-16 items-center'>
          <div id='text' className='order-2 lg:order-1 sm:w-full w-4/5 lg:text-start text-center'>
            <h2 className='text-4xl sm:mb-8 mb-4 font-semibold'>Sobre</h2>
            <p className='sm:text-base text-sm leading-5 w-fit'>Na Hokaiz Media, não apenas contamos histórias, mas moldamos narrativas que ecoam emoções profundas e inspiram audiências ao redor do mundo. Fundada com a visão audaciosa de fundir paixão automotiva com excelência visual, nossa jornada começou como um sonho compartilhado de criar experiências extraordinárias através das lentes da cinematografia e da fotografia.</p>
            <p className='sm:text-base text-sm leading-5 w-fit'>Movidos por uma busca incessante por perfeição, dedicamos cada momento ao aprimoramento da arte da captação e edição, buscando não apenas capturar imagens, mas sim capturar essências, momentos e emoções. Combinando nossa expertise técnica com um toque de magia criativa, cada projeto na Hokaiz Media é uma oportunidade de transformar ideias em realidade e histórias em legados. Estamos comprometidos em levar sua visão além das expectativas, proporcionando uma jornada visual que transcende as telas e o audiovisual, permanecendo eternamente no coração daqueles que têm a sorte de testemunhá-la.</p>
          </div>
          <img id='hokaiz-logo' className='order-1 lg:order-2' src={hokaiz700} alt=""/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}