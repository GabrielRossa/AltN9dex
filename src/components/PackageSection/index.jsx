import React from 'react';

import './styles.css';
import { Header } from './../Header/index';
import { SquareCard } from './../SquareCard/index';
import chevronRight from '../../assets/chevron-right-1.svg'

import bestPrice from '../../assets/best-price.png'
import mostPop from '../../assets/most-pop.png'
import { Link } from 'react-router-dom';

export const PackageSection = () => {
  return (
    <section className='w-screen h-screen flex flex-col px-52  items-center' style={{ backgroundColor: '#0B0B0D' }}>
      <Header title="The Packages" desc="Explore all available packages and prices and find the ideal package for you! Don't forget to check out our promotions." />

      <div className='flex mb-12 justify-between w-full'>
        <SquareCard cardBg={mostPop} type="MOST POPULAR" title="Pentakill" desc="Pay for 5 edits and get a bonus edit for free!"/>
        <SquareCard cardBg={bestPrice} type="BEST PRICE" title="Premium Subscription" desc="Pay a monthly fee and be entitled to 1 edit per day for a month."/>
      </div>

      <Link  to="" className='flex button-more' style={{color: '#0065FD'}}>
        <p>SEE MORE</p>
        <img src={chevronRight} alt="" />
      </Link>
    </section>
  );
};
