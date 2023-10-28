import React from 'react'
import { Presentation } from '../../components/Presentation'
import { ExploreSection } from '../../components/ExploreSection/index';
import { PackageSection } from '../../components/PackageSection/index';
import { FinalSection } from '../../components/FinalSection';
import { Tiktoks } from './../../components/Tiktoks/index';

export const Home = () => {
  return (
    <div>
      <Presentation />
      <ExploreSection />
      <PackageSection />
      <FinalSection />
    </div>
  )
}