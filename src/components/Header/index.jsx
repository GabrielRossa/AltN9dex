import React from 'react';

import './styles.css';

export const Header = ({title, desc}) => {
  return (
    <>
      <h2 className='text-4xl mb-6 mt-10 font-semibold'>{title}</h2>
      <p className='text-1xl text-center mb-12' style={{width: '42rem'}}>{desc}
      </p>
    </>
  );
};
