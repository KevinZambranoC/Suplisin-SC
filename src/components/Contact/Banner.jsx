import React from 'react';

export const Banner = () => {
    return (
        <div className="bg-gray-200">
            <div className="mt-20">
                <div className="relative h-[240px] sm:h-[340px] md:h-[420px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
                    <img
                        src="https://i.ibb.co/1sp3Qqh/Captura-de-pantalla-770.png"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Banner"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white font-semibold">
                        <p className="tracking-wide mb-4 text-sm sm:text-base md:text-lg">Inicio • Contáctanos</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-9">Contáctanos</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};


