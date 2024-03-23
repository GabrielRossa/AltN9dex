import React, { useState } from 'react';
import { BackgroundVideo } from '../BackgroundVideo'
import backgroundImage from '../../assets/458-bg.png'
import icPlay from '../../assets/play-circle.svg'

import './styles.css';
import { Navbar } from '../Navbar';

export const Presentation = () => {
    const [player, setPlayer] = useState(false)

    const containerStyle = {
        background: `linear-gradient(180deg, rgba(11, 11, 13, 0.80) -2.73%, rgba(11, 11, 13, 0.20) 40.21%, rgba(11, 11, 13, 0.20) 57.49%, rgba(11, 11, 13, 0.50) 73.51%, rgba(11, 11, 13, 0.90) 90.72%, #0B0B0D 99.95%), url(${backgroundImage}), lightgray -176.056px -124px / 130.494% 132.125% no-repeat`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'        
    };

    return (
        <div id='container' className='w-screen h-screen flex flex-col items-center justify-center' style={containerStyle}>
            <Navbar forceCollapse={player ? true : false}/>
            {player && <BackgroundVideo/>}
            <div className='flex flex-col items-center mb-12 w-full'>
                <h1 className='lg:text-8xl font-bold mb-2 md:text-7xl sm:text-6xl text-5xl text-center' style={{ fontFamily: 'Times New Roman, serif' }}>Hokaiz Media</h1>
                <p className='lg:text-xl md:text-base text-sm text-center'>Paixão pela velocidade, perfeição nos detalhes.</p>
            </div>
            <img id='play-button' onClick={() => setPlayer(true)} src={icPlay} alt="" className={`hidden absolute bottom-44 ${player ? '' : 'active'}`} />
            <div className='absolute bottom-0 h-28 w-full' style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, rgba(11, 11, 13, 0.00) 0.01%, #0B0B0D 100%)" }}></div>
        </div>
    )
};
