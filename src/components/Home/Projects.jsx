import React from 'react'
import { Link } from 'react-router-dom'

export const Projects = () => {

        return (
            <section className=" text-gray-600">
                    <div className="max-w-xl sm:pl-10 pl-3 w-[90%] m-auto bg-red-400">
                        <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>
                        <p className="mt-4 text-gray-500 text-md"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.</p>
                    </div>
                <div className="max-w-screen-3xl bg-red-700 m-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                
                    <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-1 xl:grid-cols-3 ">
                        <div className="group relative block bg-black shadow-xl">
                            <img
                                alt="interior_house"
                                src="https://sbflorida.com/wp-content/uploads/2018/09/gallery_projects_11-1-640x480.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-[-140px] group-hover:opacity-100">
                                        <h6 className="text-2xl font-bold text-white text-center">TEXTETEXTETEXTETEXTETEXTE
                                        </h6>
                                        <p className='text-white text-center mt-3'>asdasdadasd</p>
                                        <div className='flex justify-center'>
                                            <Link to='/Projects' className="inline-block rounded-full bg-cyanBlue px-12 py-3 text-sm font-medium  transition hover:bg-darkBlue text-white shadow-xl focus:outline-none focus:ring focus:ring-yellow-400 mt-8">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative block bg-black shadow-xl">
                            <img
                                alt="interior_house"
                                src="https://sbflorida.com/wp-content/uploads/2018/09/gallery_projects_07-1-640x480.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-[-140px] group-hover:opacity-100">
                                        <h6 className="text-2xl font-bold text-white text-center">TEXTETEXTETEXTETEXTETEXTE</h6>
                                        <p className='text-white text-center mt-3'>asdasdadasd</p>
                                        <div className='flex justify-center'>
                                            <Link to='/Projects' className="inline-block rounded-full bg-cyanBlue px-12 py-3 text-sm font-medium  transition hover:bg-darkBlue text-white shadow-xl focus:outline-none focus:ring focus:ring-yellow-400 mt-8">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative block bg-black shadow-xl">
                            <img
                                alt="interior_house"
                                src="https://sbflorida.com/wp-content/uploads/2018/09/gallery_projects_10-1-640x480.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />
                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-[-140px] group-hover:opacity-100">
                                        <h6 className="text-2xl font-bold text-white text-center">TEXTETEXTETEXTETEXTETEXTE
                                        </h6>
                                        <p className='text-white text-center mt-3'>asdasdadasd</p>
                                        <div className='flex justify-center'>
                                            <Link to='/Projects' className="inline-block rounded-full bg-cyanBlue px-12 py-3 text-sm font-medium  transition hover:bg-darkBlue text-white shadow-xl focus:outline-none focus:ring focus:ring-yellow-400 mt-8">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

        )
}
