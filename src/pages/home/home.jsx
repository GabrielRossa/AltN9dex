import React from 'react'
import { Presentation } from '../../components/Presentation'
import { ExploreSection } from '../../components/ExploreSection/index';
import { ProcessSection } from '../../components/ProcessSection/index';
import { FinalSection } from '../../components/FinalSection';

export const Home = () => {
  return (
    <div className='overflow-y-hidden w-screen'>
      <Presentation />
      <ExploreSection />
      <ProcessSection />
      <FinalSection />
    </div>
  )
}