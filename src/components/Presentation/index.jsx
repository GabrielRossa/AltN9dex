import React, { useState } from 'react';
import { BackgroundVideo } from '../BackgroundVideo'
import backgroundImage from '../../assets/mclaren-capa-4k.png'
import icPlay from '../../assets/play-circle.svg'

import './styles.css';
import { Navbar } from '../Navbar';

export const Presentation = () => {
    const [player, setPlayer] = useState(false)

    const containerStyle = {
        background: `linear-gradient(180deg, rgba(11, 11, 13, 0.80) -2.73%, rgba(11, 11, 13, 0.20) 40.21%, rgba(11, 11, 13, 0.20) 57.49%, rgba(11, 11, 13, 0.50) 73.51%, rgba(11, 11, 13, 0.90) 90.72%, #0B0B0D 99.95%), url(${backgroundImage}), lightgray -176.056px -124px / 130.494% 132.125% no-repeat`,
        backgroundSize: 'cover',
    };

    const scrollPos = window.scrollY

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center' style={containerStyle}>
            <Navbar forceCollapse={player ? true : false}/>
            {player && <BackgroundVideo/>}
            <div className='flex flex-col items-center mb-12'>
                <h1 className='text-8xl font-bold mb-2' style={{ fontFamily: 'Times New Roman, serif' }}>The Best Option</h1>
                <p className='text-xl'>Choose excellence. Choose AltN9dex.</p>
            </div>
            <img id='play-button' onClick={() => setPlayer(true)} src={icPlay} alt="" className={`absolute bottom-44 ${player ? '' : 'active'}`} />
            <div className='absolute bottom-0 h-28 w-full' style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, rgba(11, 11, 13, 0.00) 0.01%, #0B0B0D 100%)" }}></div>
        </div>
    )
};
