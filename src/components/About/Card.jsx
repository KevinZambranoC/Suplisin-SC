import React from 'react'
import { Link } from 'react-router-dom'

export const Card = () => {
    return (
        <div className='h-[460px] md:h-48 bg-offWhite w-full '>
            <div className=' w-[85%] xl:w-2/3 m-auto bg-cyanBlue flex flex-col justify-between items-center md:flex-row text-white relative top-[-60px] md:top-[-125px] shadow-2xl'>
                <article className="overflow-hidden shadow transition hover:shadow-lg grid grid-cols-1 md:grid-cols-2 ">
                    <img alt="Office" src="https://i.ibb.co/BGKhV8J/Captura-de-pantalla-789.png" className="h-64 w-full object-cover"/>
                    <div className="bg-white p-4 sm:p-6">
                        <a href="#">
                            <h3 className=" text-xl text-darkBlue mt-3">¿Cómo puedo realizar un pedido?</h3>
                        </a>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"> Puedes realizar un pedido a través de nuestra página web, contactando a nuestro equipo de ventas, o visitando nuestras instalaciones. Ofrecemos múltiples opciones de pago y envío para tu comodidad.
                        </p>
                        <div className="mt-10 text-center">
                                <Link to='/Contact' className="inline-block rounded bg-cyanBlue px-12 py-3 text-sm font-medium  transition hover:bg-darkBlue text-white shadow-xl focus:outline-none focus:ring focus:ring-yellow-400">Leer más</Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}
