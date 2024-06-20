import React from 'react'

export const Stats = () => {
    return (
        <div className=" shadow-xl">
            <div className="relative">
                <img
                    src="https://i.ibb.co/1dQwChP/Captura-de-pantalla-788.png"
                    className="w-full object-cover h-[1240px] sm:h-[760px] md:h-[720px] block"/>
                <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0" />
                <div className="absolute top-[12%] md:top-10 w-full text-center text-white font-semibold ">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                        Ofrecemos servicios confiables para calzado industrial</h2>
                        <p className="mt-4 sm:text-xl">Empoderando tus ventas al detal con calidad inquebrantable, proporcionamos soluciones confiables para una amplia gama de necesidades en el calzado industrial.</p>
                    </div>
                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-white pt-3">Innovación y Tecnología</dt>
                                <dd className="text-4xl font-extrabold text-gray-300 md:text-5xl">
                                ✔️
                                </dd>
                            </div>
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-white pt-3">Calidad Garantizada</dt>
                                <dd className="text-4xl font-extrabold text-gray-300 md:text-5xl">
                                ✔️
                                </dd>
                            </div>
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-white pt-3">Experiencia y Confianza</dt>
                                <dd className="text-4xl font-extrabold text-gray-300 md:text-5xl">✔️</dd>
                            </div>
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-white pt-3">Diseños Propios</dt>
                                <dd className="text-4xl font-extrabold text-gray-300 md:text-5xl">✔️</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
