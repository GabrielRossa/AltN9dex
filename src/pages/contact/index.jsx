import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

import insta from '../../assets/insta.png'
import wpp from '../../assets/wpp.png'
import email from '../../assets/email.png'
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div className='overflow-y-hidden w-screen'>
      <Navbar />
      <div id="container" className='flex flex-col items-center'>
        <h2 className='text-4xl font-semibold mb-4'>Contato</h2>
        <p className='w-3/5 text-center'>Estamos ansiosos para ouvir de você! Entre em contato conosco através do WhatsApp, Instagram ou E-mail para qualquer consulta, colaboração ou projeto que você tenha em mente.</p>
        <div id="medias" className='flex lg:gap-x-40 sm:gap-x-24 gap-x-12 mt-28'>
          <a className='w-10 sm:w-14 lg:w-20' href='https://www.instagram.com/hokaizmedia/'><img src={insta} alt="" /></a>
          <a className='w-10 sm:w-14 lg:w-20' href='https://wa.me/+5549998280747'><img src={wpp} alt="" /></a>
          <a className='w-14 sm:w-20 lg:w-20' href='mailto:gabrielrossaxdev@gmail.com'><img src={email} alt="" /></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}