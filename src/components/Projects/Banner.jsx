import React from 'react'

export const Banner = () => {
    return (
        <div className="mt-20 shadow-xl">
            <div className="relative">
                <img
                    src="https://i.ibb.co/1sBX07X/Captura-de-pantalla-808.png"
                    className="w-full object-cover h-[340px] md:h-[420px] block"/>
                <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
                <div className="absolute top-1/4 mt-12 w-full text-center text-white font-semibold ">
                    <p className='tracking-wide mb-4'>Inicio • Productos</p>
                    <h2 className="lg:text-7xl md:tex-4xl text-3xl leading-9 ">Nuestros Productos</h2>
                </div>
            </div>
        </div>
    )
}
