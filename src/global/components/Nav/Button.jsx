import React from 'react'

export const Button = (props) => {
    return (
        <button className='w-[220px] hidden lg:flex border border-gray-300 rounded-md text-white py-2 px-6 rounded lg:ml-8 lg:hover:bg-lightGray/[.09]
        duration-300'>
            {props.children}
        </button>
    )
}
