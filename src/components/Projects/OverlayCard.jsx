import React from 'react'
import { Link } from 'react-router-dom'

export const OverlayCard = () => {
    return (
        <section className='bg-gradient-to-b from-gray-100 to-gray-300'>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img alt="wall tiles" src="https://images.unsplash.com/photo-1523413184730-e85dbbd04aba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" className="absolute inset-0 h-full w-full object-cover"/>
                        </div>
                    </div>
                    <div className="relative flex items-center bg-indigo-100/30">
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-indigo-100/30"></span>
                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">Skillfully Renovating Spaces: Tile and Plaster Wall Finishing Service.</h2>
                            <p className="mt-4 text-gray-600"> Our commitment to tile installation and wall finishes is reflected in the quality we bring to your spaces. Whether you're looking to revitalize your home or add a professional touch to your workplace, our team of tile installation and drywall finishing specialists is ready to turn your ideas into tangible realities.</p>
                            <Link to='/contact' className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            >
                            Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
