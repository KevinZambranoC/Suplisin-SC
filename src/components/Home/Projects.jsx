import React from 'react'
import { Link } from 'react-router-dom'

export const Projects = () => {

        return (
            <section className=" text-gray-600">
                    <div className="max-w-xl p-2 text-center w-[90%] m-auto">
                        <h2 className="text-3xl font-bold text-darkBlue sm:text-4xl">¿Qué nos hace especiales?</h2>
                        <p className="mt-4 text-gray-600 text-lg">Con nuestra meticulosa atención a la calidad y un enfoque centrado en la seguridad, ofrecemos calzado industrial que no solo cumple con las normas más estrictas, sino que también brinda comodidad y protección excepcionales para los trabajadores en diversos sectores.</p>
                    </div>
                <div className="max-w-screen-3xl m-auto px-4 py-4 sm:py-8 sm:px-6 lg:py-10 lg:px-8">
                
                    <div className=" grid gap-4 grid-cols-1 md:grid-cols-1 xl:grid-cols-3 ">
                        <div className="group relative block bg-black shadow-xl">
                            <img
                                alt="Seguridad y Protección" loading='lazy'
                                src="https://i.ibb.co/rGhqFHS/guilherme-cunha-k-JKc-FMnk-EA4-unsplash.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-[-40%] md:group-hover:translate-y-[-60%] h-40 group-hover:opacity-100">
                                        <h6 className="text-3xl font-bold text-white text-center">Seguridad y Protección
                                        </h6>
                                        <p className='text-white text-center mt-3'>proporcionando protección avanzada contra impactos</p>
                                        <div className='flex justify-center'>
                                            <Link to='/Projects' className="inline-block rounded-full bg-cyanBlue px-12 py-3 text-sm font-medium  transition hover:bg-darkBlue text-white shadow-xl focus:outline-none focus:ring focus:ring-yellow-400 mt-8">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative block bg-black shadow-xl">
                            <img
                                alt="Comodidad"
                                loading='lazy'
                                src="https://i.ibb.co/K6HyxhF/Captura-de-pantalla-763.png"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-[-40%] md:group-hover:translate-y-[-60%] h-40 group-hover:opacity-100">
                                        <h6 className="text-3xl font-bold text-white text-center">Comodidad</h6>
                                        <p className='text-white text-center mt-3'>Diseñados ergonómicamente</p>
                                        <div className='flex justify-center'>
                                            <Link to='/Projects' className="inline-block rounded-full bg-cyanBlue px-12 py-3 text-sm font-medium  transition hover:bg-darkBlue text-white shadow-xl focus:outline-none focus:ring focus:ring-yellow-400 mt-8">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative block bg-black shadow-xl">
                            <img
                                alt="Durabilidad"
                                loading='lazy'
                                src="https://i.ibb.co/Lpq342L/Captura-de-pantalla-764.png"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-[-40%] md:group-hover:translate-y-[-60%] h-40 group-hover:opacity-100">
                                        <h6 className="text-3xl font-bold text-white text-center">Durabilidad
                                        </h6>
                                        <p className='text-white text-center mt-3'>Hechos para durar</p>
                                        <div className='flex justify-center'>
                                            <Link to='/Projects' className="inline-block rounded-full bg-cyanBlue px-12 py-3 text-sm font-medium  transition hover:bg-darkBlue text-white shadow-xl focus:outline-none focus:ring focus:ring-yellow-400 mt-8">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

        )
}
