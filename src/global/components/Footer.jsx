import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-offWhite">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to='/' className="flex items-center w-48">
                            <img src='/logo.png' className="h-12 w-48 mr-3" alt="Suplisin logo" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div className='ml-4'>
                            <h2 className="mb-6 text-sm font-semibold text-black  uppercase dark:text-white">Contactanos</h2>
                            <ul className="text-black-400 font-medium">
                                <li className="mb-4">
                                    <Link to='contact' className="hover:underline w-3/6 inline-block">San Cristóbal, Táchira, Venezuela</Link>
                                </li>
                                <li>
                                    <div className='inline-block h-6'>
                                        <span className='bg-call w-4 h-4 text-white/[0] mt-[2px] bg-cover inline-block mr-2'>123</span>
                                        <a target='blank' href="https://api.whatsapp.com/send?phone=5804247280094" className="hover:underline align-top">+58 0424 - 7280094</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-black">Siguenos en Redes</h2>
                            <ul className="text-black-400 font-medium">
                                <li className="mb-4">
                                    <div className="hover:underline inline block h-6">
                                        <span className='bg-facebook w-4 h-4 text-white/[0] align-middle bg-cover inline-block mr-2'>123</span>
                                        <a target='blank' href="https://www.facebook.com/SuccessbuildLLC" className='hover:underline align-middle'>Facebook</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className='bg-instagram w-4 h-4 text-white/[0] align-middle bg-cover inline-block mr-2'>123</span>
                                        <a target='blank' href="https://www.instagram.com/successbuild_fl" className="hover:underline align-middle">Instagram</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-black">schedules</h2>
                            <ul className="text-black-400 font-medium">
                                <li className="mb-4">
                                    <p>Lun - Sab 8:00am - 5:00pm</p>
                                </li> 
                                <li>
                                    <p className=" text-black-500">Domingo CERRADO</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center text-gray-400">© 2024 <p className="hover:underline inline-block">Suplisin LLC</p>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer