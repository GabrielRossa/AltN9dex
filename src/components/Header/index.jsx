import React from 'react';

import './styles.css';

export const Header = ({title, desc}) => {
  return (
    <>
      <h2 className='lg:text-4xl mb-6 mt-10 font-semibold   text-3xl'>{title}</h2>
      <p className='lg:text-1xl text-center mb-12'>{desc}
      </p>
    </>
  );
};
