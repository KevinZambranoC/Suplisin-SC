import React from 'react'
import { Link } from 'react-router-dom'

export const Phrase = () => {
    return (
        <div className='relative h-[460px] md:h-[360px] bg-red-500'>
            <div className="bg-cover bg-center brightness-75 h-full object-fill bg-[url(https://images.unsplash.com/photo-1607400201515-c2c41c07d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)]">
            </div>
            <div className="md:w-1/2 absolute top-0 text-white  py-24 px-10">
                    <p className="font-bold text-sm uppercase">Services</p>
                    <p className="text-3xl font-bold">Flawless Wall Finishes You Can Trust</p>
                    <p className="text-2xl mb-10 leading-none text-offWhite">Transforming Spaces with Reliable Wall Finishes: Our Commitment to Excellence</p>
                    <Link to='/contact' className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</Link>
                </div>  
        </div>
    )
}
