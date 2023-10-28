import React from 'react';

import './styles.css';

export const Header = ({title, desc}) => {
  return (
    <>
      <h2 className='text-4xl mb-6 mt-10 font-semibold'>{title}</h2>
      <p className='w-2/5 text-center mb-20'>{desc}
      </p>
    </>
  );
};
