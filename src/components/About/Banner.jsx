import React from 'react'

export const Banner = () => {
    return (
        <div className="mt-20 shadow-xl">
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1607570838997-65f270035031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1688&q=80"
                    className="w-full object-cover h-[340px] md:h-[420px] block"/>
                <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
                <div className="absolute top-1/4 mt-12 w-full text-center text-white font-semibold ">
                    <p className='tracking-wide mb-4'>HOME • About</p>
                    <h2 className="lg:text-7xl md:tex-4xl text-3xl leading-9 ">About Us</h2>
                </div>
            </div>
        </div>
    )
}
