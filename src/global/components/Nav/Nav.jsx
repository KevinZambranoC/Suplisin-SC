import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { Button } from './Button';

const Nav = () => {

    let Links =[
        {name:"Home",route:"/"},
        {name:"Services",route:"/services"},
        {name:"About Us",route:"/about"},
        {name:"Contact",route:"/contact"},
        {name:"Projects",route:"/projects"},
    ];

    let [open,setOpen]=useState(false);

    return (
        <div className='z-20 shadow-xl w-screen fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-darkBlue py-4 lg:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <span className=' flex items-center w-56 '>
                        <img className='w-56 h-12 self-center text-2xl font-semibold whitespace-nowrap w-32 object-cover' src="/logo.png" alt="succesBuild logo" />
                    </span>
                </div>
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
                <ul className={`lg:flex shadow-xl lg:shadow-none lg:max-h-12 h-auto  bg-white lg:bg-transparent lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-10] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {
                        Links.map((link)=>(
                        <li key={link.name} className='lg:ml-8 text-lg lg:my-0 my-7'>
                            <Link to={link.route} className='text-gray-700 lg:text-white hover:text-gray-400 duration-500'>{link.name}</Link>
                        </li>
                        ))
                    }
                    <Button>
                        <span className='pr-1'><ion-icon id='calc' name="calculator-outline"></ion-icon></span>
                        <p className='inline-block mt-[3px]'>GET A FARE RATE</p>
                    </Button>
                </ul>
            </div>
        </div>
    )
}

export default Nav