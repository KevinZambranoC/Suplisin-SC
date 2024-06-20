import React from 'react'

export const ServiceInfo = () => {
    return (
        <section className='mb-12 md:mb-0 bg-gradient-to-b from-gray-500/10 to-gray-200/10'>
            <div className="mx-auto h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-80 overflow-hidden sm:h-80 lg:order-last lg:h-full">
                        <img alt="calzado industrial" src="https://i.ibb.co/Qmp5DRd/Captura-de-pantalla-803.png" className="absolute inset-0 h-full w-full object-cover"/>
                    </div>
                    <div className="lg:py-24 w-2/3 mx-auto my-8">
                        <h2 className="text-4xl font-bold mb-6">Venta de Calzado Industrial</h2>
                        <h4 className="text-2xl font-bold mb-4">Proporcionando Seguridad y Confort en el Trabajo</h4>
                        <p className="mb-3 text-gray-500">Transformamos tu entorno laboral con calzado de alta calidad que garantiza la seguridad y el confort. Nuestro equipo de expertos se dedica a ofrecer productos duraderos y fiables, adecuados para cualquier sector industrial.</p>
                        <ul className="space-y-4 text-left text-gray-500 pt-4">
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Servicio confiable y seguro</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Técnicos de servicio completamente capacitados</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Certificados, asegurados y con licencia</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-80 overflow-hidden sm:h-80 lg:order-first lg:h-full">
                        <img alt="calzado personalizado" src="https://i.ibb.co/fYc2hzz/Captura-de-pantalla-804.png" className="absolute inset-0 h-full w-full object-cover"/>
                    </div>
                    <div className="lg:py-24 w-2/3 mx-auto my-8">
                        <h2 className="text-4xl font-bold mb-6">Personalización de Calzado</h2>
                        <h4 className="text-2xl font-bold mb-4">Adaptando el Calzado a tus Necesidades</h4>
                        <p className="mb-3 text-gray-500">Personalizar el calzado para adaptarlo a tus necesidades específicas es esencial para garantizar el máximo confort y protección. Ofrecemos soluciones personalizadas para satisfacer las demandas de cualquier entorno laboral.</p>
                        <ul className="space-y-4 text-left text-gray-500 pt-4">
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Diseños únicos y personalizados</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Materiales de alta calidad</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-4.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Adaptabilidad a cualquier entorno</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
