import React from 'react'
import { GiDrill } from 'react-icons/gi';
import { GiPaintRoller } from 'react-icons/gi';
import { GiFloorPolisher } from 'react-icons/gi';

export const Services = () => {
    return (
        <>
            <div className="mt-20 shadow-xl">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1560184897-1ee3713708ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80"
                        className="w-full object-cover h-[340px] md:h-[420px] block"/>
                    <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
                    <div className="absolute top-1/4 mt-12 w-full text-center text-white font-semibold ">
                        <p className='tracking-wide mb-4'>HOME • SERVICES</p>
                        <h2 className="lg:text-7xl md:tex-4xl text-3xl leading-9 ">Our Services</h2>
                    </div>
                </div>
            </div>

            <section className=" text-darkBlue bg-gradient-to-b from-gray-400/10 to-offWhite pb-12">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12  sm:px-6 lg:py-16 lg:px-8">
                    <div className="mx-auto text-center w-3/5 w-full">
                        <h2 className="text-3xl font-bold sm:text-5xl">Ensuring your comfort is our utmost priority</h2>
                        <p className="mt-4 text-gray-600">Garantizar su comodidad es nuestra máxima prioridad, y estamos dedicados a ir más allá para crear un ambiente donde se sienta realmente a gusto.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-gray-800 hover:shadow-gray-500/10 bg-white" href="/services/digital-campaigns">
                            <GiDrill size={50} className='ml-2'/>
                            <h2 className="mt-4 text-xl font-bold  text-darkBlue">Surface Demolition</h2>
                            <p className="mt-1 text-sm text-gray-500">Surface demolition is vital for renovations, ensuring safe removal of structures or coatings to lay the groundwork for successful transformations.</p>
                        </a>
                        <a className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-gray-800 hover:shadow-gray-500/10 bg-white" href="/services/digital-campaigns">
                            <GiPaintRoller size={50} className='ml-2'/>
                            <h2 className="mt-4 text-xl font-bold  text-darkBlue">Cleaning & Maintenance</h2>
                            <p className="mt-1 text-sm text-gray-500">Cleaning & Maintenance ensure lasting functionality and aesthetics. Regular care prevents damage and promotes hygiene, fostering inviting and well-kept spaces.</p>
                        </a>
                        <a className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-gray-800 hover:shadow-gray-500/10 bg-white" href="/services/digital-campaigns">
                            <GiFloorPolisher size={50} className='ml-2'/>
                            <h2 className="mt-4 text-xl font-bold  text-darkBlue">Surface Preparation</h2>
                            <p className="mt-1 text-sm text-gray-500">Surface preparation is vital for successful painting. A clean, smooth surface ensures paint adheres well and lasts longer. Repairing cracks and imperfections guarantees a flawless finish..</p>
                        </a>
                    </div>
                </div>
            </section>

            <section className='mb-12 md:mb-0 bg-gradient-to-b from-gray-500/10 to-gray-200/10'>
                <div className="mx-auto h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative h-80 overflow-hidden sm:h-80 lg:order-last lg:h-full">
                            <img alt="Party" src="https://images.unsplash.com/photo-1610276099461-9289d5456acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="absolute inset-0 h-full w-full object-cover"/>
                        </div>
                        <div className="lg:py-24 w-2/3 mx-auto my-8">
                            <h2 className="text-4xl font-bold mb-6">Hardwood Floor Installation</h2>
                            <h4 className="text-2xl font-bold mb-4">Crafting Elegance from Timber to Texture</h4>
                            <p className="mb-3 text-gray-500">We transform your spaces with elegance and quality. Our team of experts carries out each project with passion and precision, from meticulous preparation to flawless installation. Whether classic, modern or rustic, we elevate your home's aesthetic with the timeless warmth of hardwood flooring.</p>
                            <ul className="space-y-4 text-left text-gray-500 pt-4">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Confident and reliable service</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Fully trained service technicians</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Bonded, Insured and Licensed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto ">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative h-80 overflow-hidden sm:h-80 lg:order-first lg:h-full">
                            <img alt="Party" src="https://images.unsplash.com/photo-1662557499772-2c613eddadd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="absolute inset-0 h-full w-full object-cover"/>
                        </div>
                        <div className="lg:py-24 w-2/3 mx-auto my-8">
                            <h2 className="text-4xl font-bold mb-6">Laminate Floor Maintenance</h2>
                            <h4 className="text-2xl font-bold mb-4">Keeping the shine: Expert maintenance of laminate floors</h4>
                            <p className="mb-3 text-gray-500 ">Maintaining the beauty and durability of your laminate flooring is essential to prolong its life and maintain a cozy atmosphere in your home. At our laminate floor maintenance service, we offer specialized solutions to care for and revitalize your surfaces. From deep cleaning to repairing minor wear and tear, our team of highly trained professionals will keep your floors in optimal condition.</p>
                            <ul className="space-y-4 text-left text-gray-500 pt-4">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Confident and reliable service</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Fully trained service technicians</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Bonded, Insured and Licensed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
