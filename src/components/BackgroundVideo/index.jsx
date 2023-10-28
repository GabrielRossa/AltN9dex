import React from 'react';

import './styles.css';

export const BackgroundVideo = () => {
  return (
    <>
      <iframe 
        className='z-10 '
        width="1280" 
        height="720" 
        src="https://www.youtube.com/embed/dMoWkDjUDYA?si=mvD2pLBH7noeiJFI&amp;autoplay=1" 
        title="YouTube video player" 
        frameborder="0"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
    </>
  );
};
