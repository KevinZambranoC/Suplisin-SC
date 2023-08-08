import React from 'react'

export const Button = (props) => {
    return (
        <button className='flex w-[220px] border border-gray-300 rounded-md text-white py-2 px-6 rounded lg:ml-8 bg-gray-800 hover:bg-lightGray/[.09]
        duration-300'>
            {props.children}
        </button>
    )
}
