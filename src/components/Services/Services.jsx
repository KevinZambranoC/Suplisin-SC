import React from 'react'
import { GiDrill } from 'react-icons/gi';
import { GiPaintRoller } from 'react-icons/gi';
import { GiFloorPolisher } from 'react-icons/gi';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export const Services = () => {

    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value); 

    return (
        <>
            <div className="mt-20 shadow-xl">
                <div className="relative">
                    <img rel='preload' 
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
                        <p className="mt-4 text-gray-600">Ensuring your comfort is our top priority, and we are dedicated to going above and beyond to create an environment where you feel truly at ease.</p>
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
            
            <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[760px]">
                <div className="absolute inset-0 bg-white/10 sm:bg-transparent sm:from-white/30 sm:to-white/10 sm:bg-gradient-to-r"></div>
                <div className=" ml-30 relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-top">
                    <div className="max-w-xl text-center sm:text-left mt-4">
                        <h1 className="text-4xl font-extrabold sm:text-5xl text-darkBlue">How to decide between new flooring system quotes
                        </h1>
                        <p className="my-6 max-w-lg text-bold sm:text-xl/relaxed text-darkBlue">Courtesy may not be the first thing people think of when it comes to flooring, but for us, it's one of the most important tools we carry</p>
                        <Accordion open={open === 1} className="mb-2 rounded-lg bg-lightGray shadow-lg px-4">
                            <AccordionHeader onClick={() => handleOpen(1)} className={`border-b-0 text-gray-600 hover:text-gray-800 transition-colors ${ open === 1 ? "text-gray-800 hover:!text-gray-500" : ""}`}>Features & Benefits</AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express ourselves and actualize our dreams.</AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2} className="mb-2 rounded-lg bg-lightGray shadow-lg  my-4 px-4">
                            <AccordionHeader onClick={() => handleOpen(2)} className={`border-b-0 text-gray-600 hover:text-gray-800 transition-colors ${ open === 2 ? "text-gray-800 hover:!text-gray-500" : ""}`}>Solid Hardwoods</AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">We&apos;re not always in the position that we want to be at. We&apos;re constantlygrowing. We&apos;re constantly making mistakes. We&apos;re constantly trying to expressourselves and actualize our dreams.</AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3} className="rounded-lg bg-lightGray shadow-lg  px-4">
                            <AccordionHeader onClick={() => handleOpen(3)} className={`border-b-0 text-gray-600 hover:text-gray-800transition-colors ${ open === 3 ? "text-gray-800 hover:!text-gray-500" : "" }`}>Ceramic, Porcelain and Stone Tile</AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">We&apos;re not always in the position that we want to be at. We&apos;re constantlygrowing. We&apos;re constantly making mistakes. We&apos;re constantly trying to expressourselves and actualize our dreams.</AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </section>

            <section className=" text-darkBlue bg-gradient-to-b from-gray-500/10 to-gray-200/10">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12  sm:px-6 lg:py-16 lg:px-8">
                    <div className="mx-auto text-center w-3/5 w-full">
                        <h2 className="text-3xl font-bold sm:text-5xl">Customer service is our #1 priority</h2>
                        <p className="mt-4 text-gray-600">We work fast and efficiently, never motivated to take a little longer just to kick up our earnings.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-xl">
                        <img alt="Office" src="https://images.unsplash.com/photo-1601465788455-63a148629b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" className="absolute inset-0 h-full w-full object-cover"/>
                        <div className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">TIMBER FLOORING</h3>
                                </a>
                                <p className="mt-2 line-clamp-4.5 text-sm/relaxed text-white/95"> we understand the importance of a well-designed and durable flooring system that not only enhances the aesthetics of your space but also stands up to the rigors of daily use.</p>
                            </div>
                        </div>
                    </article>
                    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-xl">
                        <img alt="Office" src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" className="absolute inset-0 h-full w-full object-cover"/>
                        <div className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">BAMBOO FLOORING</h3>
                                </a>
                                <p className="mt-2 line-clamp-4 text-sm/relaxed text-white/95"> Preventative maintenance and routine care are essential components of our comprehensive approach. By proactively addressing potential issues and consistently upkeeping your flooring, we ensure its longevity and pristine condition over time.</p>
                            </div>
                        </div>
                    </article>
                    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-xl">
                        <img alt="Office" src="https://images.unsplash.com/photo-1575204015311-0fe377370780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" className="absolute inset-0 h-full w-full object-cover"/>
                        <div className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">VINYL FLOORING</h3>
                                </a>
                                <p className="mt-2 line-clamp-4.5 text-sm/relaxed text-white/95"> rusted expert residential flooring & repair services provide a comprehensive solution for all your flooring needs. Our dedicated experts transform living spaces through high-quality flooring services</p>
                            </div>
                        </div>
                    </article>
                </div>
                </div>
            </section>
        </>
    )
}
