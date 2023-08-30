import React from 'react'
import { GiDrill } from 'react-icons/gi';
import { GiPaintRoller } from 'react-icons/gi';
import { GiFloorPolisher } from 'react-icons/gi';

export const Cards = () => {
    return (
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
    )
}
