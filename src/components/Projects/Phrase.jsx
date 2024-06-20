import React from 'react'
import { Link } from 'react-router-dom'

export const Phrase = () => {
    return (
        <div className='relative h-[460px] md:h-[360px]'>
            <div className="bg-cover bg-center brightness-50 h-full object-fill bg-[url(https://i.ibb.co/ZLG8pRH/Captura-de-pantalla-809.png)]">
            </div>
            <div className="md:w-1/2 absolute top-0 text-white  py-24 px-10">
                    <p className="font-bold text-sm uppercase">Servicios</p>
                    <p className="text-3xl font-bold">Acabados de Calzado Industrial en los que puedes confiar</p>
                    <p className="text-2xl mb-10 leading-none text-offWhite">Transformando espacios con calzado industrial confiable: Nuestro compromiso con la excelencia</p>
                    <Link to='/contact' className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contáctanos</Link>
                </div>  
        </div>
    )
}
