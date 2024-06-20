import React from 'react'
import { Link } from 'react-router-dom'

export const OverlayCard = () => {
    return (
        <section className='bg-gradient-to-b from-gray-100 to-gray-300'>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img alt="calzado industrial" src="https://i.ibb.co/xDtyyqv/Captura-de-pantalla-810.png" className="absolute inset-0 h-full w-full object-cover"/>
                        </div>
                    </div>
                    <div className="relative flex items-center bg-indigo-100/30">
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-indigo-100/30"></span>
                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">Renovando Espacios con Excelencia: Servicio de Calzado Industrial y Personalización.</h2>
                            <p className="mt-4 text-gray-600"> Nuestro compromiso con la instalación de calzado industrial se refleja en la calidad que brindamos a tus espacios de trabajo. Ya sea que busques revitalizar la seguridad en tu empresa o añadir un toque profesional a tu equipo, nuestro equipo de especialistas en calzado industrial y personalización está listo para convertir tus ideas en realidades tangibles.</p>
                            <Link to='/contact' className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            >
                            Contacta con Nosotros
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
