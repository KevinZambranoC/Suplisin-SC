import React from 'react'

const Info = () => {
    return (
        <section className="bg-offWhite">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid  lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className=" text-gray-600 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-darkBlue dark:text-white">Servicio de Calzado Industrial y Personalización de Calzado</h2>
                    <p className="mb-4 font-semibold text-darkBlue text-lg">Estamos comprometidos a hacer que tu calzado industrial luzca de la mejor manera y a que estés completamente satisfecho con nuestro servicio.</p>
                    <p>¡Todo se trata de calzado industrial! Suplisin es una empresa familiar que prioriza hacer el trabajo de la manera CORRECTA. Nos especializamos en la venta e instalación de calzado industrial en sus muchas formas, así como en la personalización de calzado para necesidades específicas.</p>
                    <p>La combinación de conocimientos líderes en la industria y años de experiencia hacen de Suplisin la elección óptima para tu proyecto de calzado industrial. Suplisin cuenta con certificaciones de la EPA, Elastilon y la Asociación Nacional de Calzado Industrial (ANCI), lo que nos coloca por encima del resto. El calzado industrial es nuestra especialidad, pero somos un servicio profesional que puede acomodar tu proyecto sin importar el tamaño. Recuerda: el calzado adecuado, al precio adecuado, con las personas adecuadas.</p>
                    <div className="mt-4">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-darkBlue pt-3">Años de Experiencia</dt>
                            <dd className="text-4xl font-extrabold text-gray-600 md:text-5xl">
                                5+
                            </dd>
                        </div>
                        <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                            <dt className="order-last text-lg font-mediumtext-darkBlue pt-3">Calzados Industriales fabricados</dt>
                            <dd className="text-4xl font-extrabold text-gray-600 md:text-5xl">
                                2000+
                            </dd>
                        </div>
                        <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-darkBlue pt-3">Envios a Nivel Nacional</dt>
                            <dd className="text-4xl font-extrabold text-gray-600 md:text-5xl">1000+</dd>
                        </div>
                    </dl>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://i.ibb.co/LxPLLkV/Captura-de-pantalla-783.png" alt="demolition"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://i.ibb.co/Zm4BHK6/Captura-de-pantalla-784.png" alt="wall tiles"/>
                </div>
            </div>
        </section>
    )
}

export default Info