import React from 'react'
import { GrPaint } from 'react-icons/gr';
import { RxRulerSquare } from 'react-icons/rx';
import { PiWall } from 'react-icons/pi';

export const SectionInfo = () => {
    return (
        <section className="bg-offWhite">
            <div className="gap-24 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid  lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-darkBlue dark:text-white">Underlay Laminate Flooring Service & Wooden Floors</h2>
                    <p className="mb-4 font-semibold text-darkBlue text-lg">We are committed to making your floor look its best and for you to be completely satisfied with our service.</p>
                    <div className="mt-8 flex gap-8 flex-col">
                        <div className='flex items-center gap-5'>
                            <GrPaint size={70} className='ml-2' color=''/>
                            <div className=' text-gray-600'>
                                <h4 className='font-semibold text-darkBlue text-lg'>FAST RELIABLE SERVICE</h4>
                                <p>Experience our fast and reliable service. We are here to exceed your expectations and deliver results in record time</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <RxRulerSquare size={90} className='ml-2'/>
                            <div className=' text-gray-600'>
                                <h4 className='font-semibold text-darkBlue text-lg'>EMERGENCY SERVICES</h4>
                                <p>When home maintenance, painting and repair emergencies arise, we're here to help. Our emergency services are designed to give you peace of mind in critical situations.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <PiWall size={190} className='ml-2'/>
                            <div className=' text-gray-600'>
                                <h4 className='font-semibold text-darkBlue text-lg'>24H SERVICES</h4>
                                <p>Discover the convenience of our 24-hour maintenance, painting and repair services. Your home is important, and we understand that needs can arise at any time. From minor touch-ups to complete renovations, our commitment is to keep your home in pristine condition 24 hours a day.</p>
                            </div>
                        </div>
                </div>
                </div>

                <div className="h-[90%] mt-20 md:mt-0">
                    <img className="w-full h-full rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80" alt="wall painting"/>
                </div>
            </div>
        </section>
    )
}
