import React from 'react'
import { Navbar } from '../../components/Navbar'
import hokaiz700 from '../../assets/hokaiz-700.png'

export const About = () => {
  return (
    <div className='overflow-y-hidden w-screen h-screen flex justify-center items-center'>
      <Navbar />

      <div className='flex h-fit w-fit gap-16 items-center'>
        <div className='' style={{width: '36rem'}}>
          <h2 className='text-4xl mb-8 font-semibold'>Sobre</h2>
          <p className='leading-5'>Na Hokaiz Media, não apenas contamos histórias, mas moldamos narrativas que ecoam emoções profundas e inspiram audiências ao redor do mundo. Fundada com a visão audaciosa de fundir paixão automotiva com excelência visual, nossa jornada começou como um sonho compartilhado de criar experiências extraordinárias através das lentes da cinematografia e da fotografia.</p>
          <p className='leading-5'>Movidos por uma busca incessante por perfeição, dedicamos cada momento ao aprimoramento da arte da captação e edição, buscando não apenas capturar imagens, mas sim capturar essências, momentos e emoções. Combinando nossa expertise técnica com um toque de magia criativa, cada projeto na Hokaiz Media é uma oportunidade de transformar ideias em realidade e histórias em legados. Estamos comprometidos em levar sua visão além das expectativas, proporcionando uma jornada visual que transcende as telas e o audiovisual, permanecendo eternamente no coração daqueles que têm a sorte de testemunhá-la.</p>
        </div>
        <img className='' src={hokaiz700} alt="" style={{height: '25rem'}}/>
      </div>
    </div>
  )
}