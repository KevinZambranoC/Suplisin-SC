import React from 'react';

export const Team = () => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat sm:h-[620px] md:h-[460px] bg-[url('https://i.ibb.co/Y3swq2t/stefan-stefancik-pz-A7-QWNCIYg-unsplash.jpg')]">
            <div className="absolute inset-0 bg-white/10 bg-transparent from-white/100 to-white/80 bg-gradient-to-r"></div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:h-screen lg:items-center">
                <div className="w-full lg:w-2/3 h-full text-center sm:text-left mt-4 m-auto sm:m-0">
                    <h1 className="text-4xl font-extrabold sm:text-5xl text-darkBlue">Tenemos más de 5 años de experiencia en calzado industrial.</h1>
                    <div className='flex flex-col my-8 md:flex-row items-center'>
                        <div className='flex flex-col mb-4 md:mb-0 md:mr-8'>
                            <p className="text-bold sm:text-2xl text-darkBlue">Germán Velasco</p>
                            <p className='text-md font-bold'>Fundador</p>
                        </div>
                        <div className="flex justify-center items-center w-full md:w-1/3">
                            <img src="https://i.ibb.co/K01H8hN/Captura-de-pantalla-776.png" alt="Germán Velasco" className='w-full h-auto object-cover rounded-md'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}





