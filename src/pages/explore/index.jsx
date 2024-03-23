import React from 'react'
import "./styles.css"
import { Navbar } from '../../components/Navbar'

import ferrari1 from '../../assets/explore/458-1.png'
import ferrari2 from '../../assets/explore/458-2.png'
import ferrari3 from '../../assets/explore/458-3.png'
import ferrari4 from '../../assets/explore/458-4.png'
import ferrari5 from '../../assets/explore/458-5.png'

import dodge1 from '../../assets/explore/dodge-1.png'
import dodge2 from '../../assets/explore/dodge-2.png'
import dodge3 from '../../assets/explore/dodge-3.png'

import bmw1 from '../../assets/explore/bm-1.png'
import bmw2 from '../../assets/explore/bm-2.png'
import bmw3 from '../../assets/explore/bm-3.png'
import bmw4 from '../../assets/explore/bm-4.png'

import m81 from '../../assets/explore/m8-1.png'
import m82 from '../../assets/explore/m8-2.png'
import m83 from '../../assets/explore/m8-3.png'
import m84 from '../../assets/explore/m8-4.png'
import m85 from '../../assets/explore/m8-5.png'

import multi1 from '../../assets/explore/multi-1.png'
import multi2 from '../../assets/explore/multi-2.png'
import multi3 from '../../assets/explore/multi-3.png'
import multi4 from '../../assets/explore/multi-4.png'
import multi5 from '../../assets/explore/multi-5.png'

import mase1 from '../../assets/explore/mase-1.png'
import mase2 from '../../assets/explore/mase-2.png'
import mase3 from '../../assets/explore/mase-3.png'
import mase4 from '../../assets/explore/mase-4.png'
import mase5 from '../../assets/explore/mase-5.png'
import mase6 from '../../assets/explore/mase-6.png'
import { Footer } from './../../components/Footer/index';

export const Explore = () => {
    return (
        <div className='overflow-y-hidden w-screen justify-center relative'>
            <Navbar />
            <section id='images' className='flex gap-4 flex-col justify-center items-center w-fit mt-32 mb-16 m-auto'>
                <div id='ferrari-458' className='flex lg:flex-row flex-col gap-4 h-fit'>
                    <div id='ferrari1' className='car-img' alt="">
                        <img src={ferrari1} alt="" className='w-full' />
                    </div>
                    <div className='flex lg:flex-col gap-4 '>
                        <div id='ferrari2' className='car-img' alt="">
                            <img src={ferrari2} alt="" className='h-full' />
                        </div>
                        <div id='ferrari3' className='car-img' alt="">
                            <img src={ferrari3} alt="" className='w-full' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div id='ferrari4' className='car-img' alt="">
                            <img src={ferrari4} alt="" className='w-full' />
                        </div>
                        <div id='ferrari5' className='car-img' alt="">
                            <img src={ferrari5} alt="" className='w-full' />
                        </div>
                    </div>
                </div>

                <div id='dodge' className='flex lg:flex-row flex-col gap-4'>
                    <div className='flex flex-col gap-4' >
                        <div id='dodge1' className='car-img' alt="">
                            <img src={dodge1} alt="" className='w-full' />
                        </div>
                        <div id='dodge2' className='car-img' alt="">
                            <img src={dodge2} alt="" className='w-full' />
                        </div>
                    </div>
                    <div id='dodge3' className='car-img' alt="">
                        <img src={dodge3} alt="" className='w-full' />
                    </div>
                </div>

                <div id="bmw" className='lg:flex-row flex-col flex gap-4'>
                    <div id='bm1' className='car-img' alt=""  >
                        <img src={bmw1} alt="" className='w-full' />
                    </div>
                    <div className='flex-col flex gap-4'>
                        <div className='flex gap-4 w-fit h-fit'>
                            <div id='bm2' className='car-img' alt=""  >
                                <img src={bmw2} alt="" className='w-full' />
                            </div>
                            <div id='bm3' className='car-img' alt=""  >
                                <img src={bmw3} alt="" className='w-full' />
                            </div>
                        </div>
                        <div id='bm4' className='car-img' alt=""  >
                            <img src={bmw4} alt="" className='w-full' />
                        </div>
                    </div>
                </div>

                <div id="m8" className='lg:flex-row flex flex-col gap-4'>
                    <div className='flex-col flex gap-4' >
                        <div id='m81' className='car-img' alt="" >
                            <img src={m81} alt="" className='w-full' />
                        </div>
                        <div id='m82' className='car-img' alt="">
                            <img src={m82} alt="" className='w-full' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4' >
                        <div id='m83' className='car-img' alt="" >
                            <img src={m83} alt="" className='w-full' />
                        </div>
                        <div id='m84' className='car-img' alt="" >
                            <img src={m84} alt="" className='w-full' />
                        </div>
                    </div>
                    <div id='m85' className='car-img' alt="" >
                        <img src={m85} alt="" className='w-full' />
                    </div>
                </div>

                <div id="multi" className='lg:flex-row flex flex-col gap-4'>
                    <div className='flex flex-col gap-4' >
                        <div id='multi1' className='car-img' alt="">
                            <img src={multi1} alt="" className='w-full' />
                        </div>
                        <div id='multi2' className='car-img' alt="">
                            <img src={multi2} alt="" className='w-full' />
                        </div>
                    </div>
                    <div id='multi3' className='car-img' alt="">
                        <img src={multi3} alt="" className='w-full' />
                    </div>
                    <div className='flex flex-col gap-4' >
                        <div id='multi4' className='car-img' alt="">
                            <img src={multi4} alt="" className='w-full' />
                        </div>
                        <div id='multi5' className='car-img' alt="">
                            <img src={multi5} alt="" className='w-full' />
                        </div>
                    </div>
                </div>

                <div id="maserati" className='flex flex-col gap-4'>
                    <div className='lg:flex-row flex flex-col gap-4'>
                        <div id='mase1' className='car-img' alt="">
                            <img src={mase1} alt="" className='w-full' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div id='mase2' className='car-img' alt="">
                                <img src={mase2} alt="" className='w-full' />
                            </div>
                            <div id='mase3' className='car-img' alt="">
                                <img src={mase3} alt="" className='w-full' />
                            </div>
                        </div>
                        <div id='mase4' className='car-img' alt="">
                            <img src={mase4} alt="" className='w-full' />
                        </div>
                    </div>
                    <div className='lg:flex-row flex flex-col gap-4'>
                        <div id='mase5' className='car-img' alt="">
                            <img src={mase5} alt="" className='w-full' />
                        </div>
                        <div id='mase6' className='car-img' alt="">
                            <img src={mase6} alt="" className='w-full' />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <div className='h-4 w-screen'></div>
        </div>
    )
}