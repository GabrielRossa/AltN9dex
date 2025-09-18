import React from 'react'
import { Presentation } from '../../components/Presentation'
import { ExploreSection } from '../../components/ExploreSection/index';
import { FinalSection } from '../../components/FinalSection';
import { AboutMeSection } from '../../components/AboutMeSection';
import { ContactSection } from '../../components/Contact/ContactSection';

export const Home = () => {
  return (
    <div className='overflow-y-hidden w-screen'>
      <Presentation />
      <ExploreSection />
      <AboutMeSection />
      <ContactSection />
      <FinalSection />
    </div>
  )
}