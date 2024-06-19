import React from 'react';
import { Link } from 'react-router-dom';

export const Info = () => {
    return (
        <section className="mt-56 md:mt-0 bg-offWhite text-gray-800">
            <div className="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Su comodidad es nuestra prioridad número uno</h2>
                    <p className="mt-4 text-gray-500">En nuestra empresa, nos enorgullece ofrecer calzado industrial que proporciona seguridad y confort. Nuestro equipo está formado por expertos dedicados a cumplir con los más altos estándares de calidad.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 w-full ">
                    <div className="group relative block bg-black shadow-xl">
                        <img
                            alt="Sobre Nosotros"
                            loading='lazy'
                            src="https://i.ibb.co/TB9nssD/Captura-de-pantalla-768.png"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Profesionales Comprometidos</p>
                            <p className="text-xl font-bold sm:text-3xl pt-2 text-white">Sobre Nosotros</p>
                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">En Suplisin, nos especializamos en la venta de calzado industrial que proporciona seguridad y confort en trabajos exigentes. Ofrecemos productos que cumplen con los más altos estándares de calidad, asegurando la protección de los trabajadores. Colaboramos con fabricantes para desarrollar modelos específicos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative block bg-black shadow-xl">
                        <img
                            alt="Nuestros Productos"
                            loading='lazy'
                            src="https://i.ibb.co/nMXqKvf/Whats-App-Image-2024-06-09-at-1-45-31-PM-10.jpg"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Productos de Alta calidad</p>
                            <p className="text-xl font-bold sm:text-2xl pt-2 text-white">Nuestros Productos</p>
                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">Descubre nuestra amplia gama de calzado industrial, ideal para trabajos en construcción, manejo de maquinaria pesada, soldadura y otras actividades del sector industrial que requieren protección especializada. Cada uno de nuestros modelos está diseñado para cumplir con estrictas normativas de seguridad, ofreciendo resistencia, durabilidad y comodidad. Además, ofrecemos la posibilidad de diseñar calzados personalizados que se ajusten a las particularidades de tu oficio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative block bg-black shadow-xl">
                        <img
                            alt="Personalización"
                            loading='lazy'
                            src="https://i.ibb.co/V9DMtkv/Captura-de-pantalla-766.png"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Excelencia en diseño de calzado industrial</p>
                            <p className="text-xl font-bold sm:text-2xl pt-2 text-white">Personalización</p>
                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">En Suplisin, entendemos que cada trabajo tiene sus propias exigencias. Por eso, ofrecemos servicios de personalización de calzado industrial. Trabaja con nuestro equipo para crear diseños únicos que se adapten a las necesidades específicas de tu entorno laboral, asegurando siempre la máxima protección y confort para tus empleados.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative block bg-black shadow-xl">
                        <img
                            alt="Compromiso con la Calidad"
                            loading='lazy'
                            src="https://i.ibb.co/g9G8DyW/Captura-de-pantalla-750.png"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">La calidad del calzado industrial es nuestra prioridad</p>
                            <p className="text-xl font-bold sm:text-2xl pt-2 text-white">Compromiso con la Calidad</p>
                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">Nos enorgullece ofrecer productos que no solo cumplen, sino que superan las expectativas de nuestros clientes en términos de seguridad y rendimiento. Cada par de calzados es el resultado de una rigurosa colaboración con nuestros fabricantes y distribuidores, asegurando que solo los materiales de la más alta calidad sean utilizados en su fabricación. En Suplisin, tu seguridad es nuestra prioridad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Link to='/services' className="inline-block rounded bg-cyanBlue px-12 py-3 text-sm font-medium transition hover:bg-darkBlue text-white shadow-xl focus:outline-none focus:ring focus:ring-yellow-400">Leer más</Link>
                </div>
            </div>
        </section>
    );
}
