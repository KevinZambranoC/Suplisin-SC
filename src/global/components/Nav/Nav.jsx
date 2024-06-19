import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {

    const Links = [
        { name: "Inicio", route: "/" },
        { name: "Servicios", route: "/services" },
        { name: "Sobre Nosotros", route: "/about" },
        { name: "Contactanos", route: "/contact" },
        { name: "Productos", route: "/projects" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className='z-20 shadow-xl w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-ice py-4 lg:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <Link to='/' className='flex items-center w-56'>
                        <img className='w-56 h-12 object-cover' src="/logo.png" alt="suplisin logo" />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='lg:ml-8 text-lg lg:my-0 my-7'>
                                <Link to={link.route} className='text-gray-800 lg:text-black hover:text-gray-600 duration-500'>{link.name}</Link>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    )
}

export default Nav;