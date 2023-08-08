import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="bg-darkBlue fixed w-full z-20 top-0 left-0 border-b border-gray-200 border-gray-600">
            <div className="w-screen-xl flex flex-wrap items-center justify-between p-4">
                <Link to='/' className="w-64 flex items-center w-32">
                    <img className="w-64 h-12 self-center text-2xl font-semibold whitespace-nowrap w-32 object-cover" src='/logo.png'/>
                </Link>
                <div className="flex md:order-2">
                    <button type="button" className="h-12 hidden lg:inline text-white font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-darkBlue border border-white">
                        <span className='inline-block mr-3 h-6 bg-calculator bg-cover text-white/[0]'>aaa</span>
                        <p className='inline-block align-middle'>GET A FREE RATE</p>
                    </button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-darkBlue border-gray-700">
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                        <Link to='about' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md::hover:bg-transparent border-gray-700">About Us</Link>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 dark:hover:text-white md:hover:bg-transparent border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav