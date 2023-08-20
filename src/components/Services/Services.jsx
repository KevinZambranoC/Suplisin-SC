import React from 'react'
import { GiDrill } from 'react-icons/gi';

export const Services = () => {
    return (
        <>
            <div className="mt-20 shadow-xl">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1560184897-1ee3713708ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80"
                        className="w-full object-cover h-[340px] md:h-[420px] block"/>
                    <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
                    <div className="absolute top-1/4 mt-12 w-full text-center text-white font-semibold ">
                        <p className='tracking-wide mb-4'>HOME • SERVICES</p>
                        <h2 className="lg:text-7xl md:tex-4xl text-3xl leading-9 ">Our Services</h2>
                    </div>
                </div>
            </div>

            <section className=" text-darkBlue">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="mx-auto text-center w-3/5">
                        <h2 className="text-3xl font-bold sm:text-5xl">Ensuring your comfort is our utmost priority</h2>
                        <p className="mt-4 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequunturaliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntursaepe laborum.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-gray-800 hover:shadow-gray-500/10" href="/services/digital-campaigns">
                            <GiDrill size={50} className='ml-2'/>
                            <h2 className="mt-4 text-xl font-bold  text-darkBlue">Digital campaigns</h2>
                            <p className="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quopossimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
                        </a>
                        <a className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-gray-800 hover:shadow-gray-500/10" href="/services/digital-campaigns">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>
                            <h2 className="mt-4 text-xl font-bold  text-darkBlue">Digital campaigns</h2>
                            <p className="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quopossimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
                        </a>
                        <a className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-gray-800 hover:shadow-gray-500/10" href="/services/digital-campaigns">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>
                            <h2 className="mt-4 text-xl font-bold  text-darkBlue">Digital campaigns</h2>
                            <p className="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quopossimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img alt="Party" src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="absolute inset-0 h-full w-full object-cover"/>
                        </div>
                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>
                            <p className="mt-4 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hicatque tenetur quis eius quos ea neque sunt, accusantium soluta minusveniam tempora deserunt? Molestiae eius quidem quam repellat.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
