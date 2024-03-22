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

export const Explore = () => {
    return (
        <div className='overflow-y-hidden w-screen justify-center'>
            <Navbar />
            <section id='images' className='flex gap-4 flex-col justify-center items-center w-fit mt-32 m-auto'>
                <div id='ferrari-458' className='flex gap-4 h-fit'>
                    <img src={ferrari1} alt="" style={{height: '41.25rem'}}/>
                    <div className='flex flex-col gap-4 ' style={{width: '13.4375rem'}}>
                        <img src={ferrari2} alt="" />
                        <img src={ferrari3} alt="" />
                    </div>
                    <div className='flex flex-col gap-4' style={{width: '18.75rem'}}>
                        <img src={ferrari4} alt="" />
                        <img src={ferrari5} alt="" />
                    </div>
                </div>

                <div id='dodge' className='flex gap-4'>
                    <div className='flex flex-col gap-4' style={{width: '33.125rem'}}>
                        <img src={dodge1} alt="" />
                        <img src={dodge2} alt="" />
                    </div>
                    <img src={dodge3} alt="" style={{width: '27.5rem'}}/>
                </div>

                <div id="bmw" className='flex gap-4'>
                    <img src={bmw1} alt="" className='h-auto' style={{width: '29.875rem'}}/>
                    <div className='flex-col flex gap-4'>
                        <div className='flex gap-4 w-fit h-fit'>
                            <img src={bmw2} alt="" style={{height: '16.125rem'}}/>
                            <img src={bmw3} alt="" style={{height: '16.125rem'}}/>
                        </div>
                        <img src={bmw4} alt="" style={{width: '30.75rem'}}/>
                    </div>
                </div>

                <div id="m8" className='flex gap-4'>
                    <div className='flex-col flex gap-4' style={{width: '18.6875rem'}}>
                        <img src={m81} alt="" />
                        <img src={m82} alt="" />
                    </div>
                    <div className='flex flex-col gap-4' style={{width: '13.5rem'}}>
                        <img src={m83} alt="" />
                        <img src={m84} alt="" />
                    </div>
                    <img src={m85} alt="" style={{width: '27.5rem'}}/>
                </div>

                <div id="multi" className='flex gap-4'>
                    <div className='flex flex-col gap-4' style={{width: '13.5rem'}}>
                        <img src={multi1} alt="" />
                        <img src={multi2} alt="" />
                    </div>
                    <img src={multi3} alt="" style={{width: '27.5rem'}}/>
                    <div className='flex flex-col gap-4' style={{width: '18.6875rem'}}>
                        <img src={multi4} alt="" />
                        <img src={multi5} alt="" />
                    </div>
                </div>

                <div id="maserati" className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <img src={mase1} alt="" style={{width: '21.25rem'}}/>
                        <div className='flex flex-col gap-4'>
                            <img src={mase2} alt="" style={{width: '17.1875rem'}}/>
                            <img src={mase3} alt="" style={{width: '17.1875rem'}}/>
                        </div>
                        <img src={mase4} alt="" style={{width: '21.25rem'}}/>
                    </div>
                    <div className='flex gap-4'>
                        <img src={mase5} alt="" style={{width: '30.375rem'}}/>
                        <img src={mase6} alt="" style={{width: '30.375rem'}}/>
                    </div>
                </div>
            </section>
        </div>
    )
}