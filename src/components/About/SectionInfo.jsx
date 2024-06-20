import React from 'react'


export const SectionInfo = () => {
    return (
        <section className="bg-offWhite">
            <div className="gap-24 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid  lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-darkBlue dark:text-white">Dando Confianza, Ventas, Durabilidad y Calidad garantizada</h2>
                    <p className="mb-4 font-semibold text-darkBlue text-lg">Nos comprometemos a hacer que tu calzado industrial sea el mejor y a que estés completamente satisfecho con nuestro servicio.</p>
                    <div className="mt-8 flex gap-8 flex-col">
                        <div className='flex items-center gap-5'>
                            <div className=' text-gray-600'>
                                <h4 className='font-semibold text-darkBlue text-lg'>Experiencia y Confianza</h4>
                                <p>Con años de experiencia en el sector, hemos construido una reputación de confianza y excelencia. Nuestros clientes saben que pueden contar con nosotros para obtener productos de alta calidad y un servicio excepcional.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className=' text-gray-600'>
                                <h4 className='font-semibold text-darkBlue text-lg'>Innovación y Tecnología</h4>
                                <p>En Suplisin, nos enorgullece estar a la vanguardia de la innovación y la tecnología en el calzado industrial. Incorporamos las últimas tecnologías en diseño y fabricación para garantizar que nuestros productos no solo sean seguros, sino también cómodos y eficientes.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className=' text-gray-600'>
                                <h4 className='font-semibold text-darkBlue text-lg'>Calidad Garantizada</h4>
                                <p>Nuestra prioridad es la calidad. Cada par de calzado industrial que vendemos pasa por rigurosos controles de calidad para asegurar que cumple con todas las normativas y estándares internacionales. Nos comprometemos a ofrecer productos que proporcionen la máxima protección y durabilidad.</p>
                            </div>
                        </div>
                </div>
                </div>

                <div className="h-[90%] mt-20 md:mt-0">
                    <img className="w-full h-full rounded-2xl shadow-lg" src="https://i.ibb.co/xjsnb7m/Captura-de-pantalla-790.png" alt="wall painting"/>
                </div>
            </div>
        </section>
    )
}
