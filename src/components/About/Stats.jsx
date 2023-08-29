import React from 'react'

export const Stats = () => {
    return (
        <div className=" shadow-xl">
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1560184897-1ee3713708ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80"
                    className="w-full object-cover h-[1240px] sm:h-[760px] md:h-[720px] block"/>
                <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0" />
                <div className="absolute top-[12%] md:top-10 w-full text-center text-white font-semibold ">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">We offer reliable services for most flooring systems</h2>
                        <p className="mt-4 sm:text-xl">Empowering your spaces with unwavering quality, we provide dependable solutions for a wide range of flooring systems</p>
                    </div>
                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-white pt-3">Concrete Surface Preparation</dt>
                                <dd className="text-4xl font-extrabold text-gray-300 md:text-5xl">
                                    45%
                                </dd>
                            </div>
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-white pt-3">Sand & Finish Hardwood Floors</dt>
                                <dd className="text-4xl font-extrabold text-gray-300 md:text-5xl">
                                    90%
                                </dd>
                            </div>
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-white pt-3">Granite and Counter Sufaces</dt>
                                <dd className="text-4xl font-extrabold text-gray-300 md:text-5xl">50%</dd>
                            </div>
                            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-white pt-3">Bamboo, Laminate, and Vinyl type</dt>
                                <dd className="text-4xl font-extrabold text-gray-300 md:text-5xl">40%</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
