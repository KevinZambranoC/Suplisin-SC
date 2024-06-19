import React from 'react'

export const Banner = () => {
    return (
        <div className="bg-gray-200 ">
            <div className="mt-20">
                <div className="relative">
                    <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%20158.png"
                        className="w-full object-cover h-[340px] md:h-[420px] block"/>
                    <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
                    <div className="absolute top-1/4 mt-12 w-full text-center text-white font-semibold ">
                        <p className='tracking-wide mb-4'>Inicio • Contactanos</p>
                        <h2 className="lg:text-7xl md:tex-4xl text-3xl leading-9 ">Contactanos</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
