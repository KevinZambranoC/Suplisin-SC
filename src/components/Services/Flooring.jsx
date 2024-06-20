import React from 'react'

const Flooring = () => {
    return (
        <section className="text-darkBlue bg-gradient-to-b from-gray-500/10 to-gray-200/10">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="mx-auto text-center w-3/5 w-full">
                    <h2 className="text-3xl font-bold sm:text-5xl">El servicio al cliente es nuestra prioridad #1</h2>
                    <p className="mt-4 text-gray-600">Trabajamos rápido y eficientemente, nunca motivados para tomarnos más tiempo solo para aumentar nuestras ganancias.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-xl">
                        <img alt="calzado industrial" src="https://i.ibb.co/yNMJVZQ/Captura-de-pantalla-800.png" className="absolute inset-0 h-full w-full object-cover"/>
                        <div className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">CALZADO INDUSTRIAL</h3>
                                </a>
                                <p className="mt-2 line-clamp-4.5 text-sm/relaxed text-white/95">En Suplisin, entendemos la importancia de un calzado bien diseñado y duradero que no solo mejora la estética de tu espacio de trabajo, sino que también resiste el rigor del uso diario.</p>
                            </div>
                        </div>
                    </article>
                    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-xl">
                        <img alt="personalización de calzado" src="https://i.ibb.co/8N6xPt7/Captura-de-pantalla-798.png" className="absolute inset-0 h-full w-full object-cover"/>
                        <div className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">PERSONALIZACIÓN</h3>
                                </a>
                                <p className="mt-2 line-clamp-4 text-sm/relaxed text-white/95">El mantenimiento preventivo y el cuidado rutinario son componentes esenciales de nuestro enfoque integral. Al abordar proactivamente los posibles problemas y mantener consistentemente tu calzado, aseguramos su longevidad y condición prístina.</p>
                            </div>
                        </div>
                    </article>
                    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-xl">
                        <img alt="consultoría y asesoramiento" src="https://i.ibb.co/7K13DsH/Captura-de-pantalla-799.png" className="absolute inset-0 h-full w-full object-cover"/>
                        <div className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">CONSULTORÍA</h3>
                                </a>
                                <p className="mt-2 line-clamp-4.5 text-sm/relaxed text-white/95">Nuestros servicios confiables de consultoría y asesoramiento proporcionan una solución integral para todas tus necesidades de calzado industrial. Nuestros expertos dedicados transforman espacios laborales a través de servicios de alta calidad.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
)
}

export default Flooring 
