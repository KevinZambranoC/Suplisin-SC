import React from 'react'

const Flooring = () => {
    return (
        <section className=" text-darkBlue bg-gradient-to-b from-gray-500/10 to-gray-200/10">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12  sm:px-6 lg:py-16 lg:px-8">
                <div className="mx-auto text-center w-3/5 w-full">
                    <h2 className="text-3xl font-bold sm:text-5xl">Customer service is our #1 priority</h2>
                    <p className="mt-4 text-gray-600">We work fast and efficiently, never motivated to take a little longer just to kick up our earnings.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-xl">
                        <img alt="kitchen" data-twic src="https://images.unsplash.com/photo-1601465788455-63a148629b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" className="absolute inset-0 h-full w-full object-cover"/>
                        <div className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">TIMBER FLOORING</h3>
                                </a>
                                <p className="mt-2 line-clamp-4.5 text-sm/relaxed text-white/95"> we understand the importance of a well-designed and durable flooring system that not only enhances the aesthetics of your space but also stands up to the rigors of daily use.</p>
                            </div>
                        </div>
                    </article>
                    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-xl">
                        <img alt="table" data-twic src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" className="absolute inset-0 h-full w-full object-cover"/>
                        <div className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">BAMBOO FLOORING</h3>
                                </a>
                                <p className="mt-2 line-clamp-4 text-sm/relaxed text-white/95"> Preventative maintenance and routine care are essential components of our comprehensive approach. By proactively addressing potential issues and consistently upkeeping your flooring, we ensure its longevity and pristine condition over time.</p>
                            </div>
                        </div>
                    </article>
                    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-xl">
                        <img alt="livingroom" data-twic src="https://images.unsplash.com/photo-1575204015311-0fe377370780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" className="absolute inset-0 h-full w-full object-cover"/>
                        <div className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">VINYL FLOORING</h3>
                                </a>
                                <p className="mt-2 line-clamp-4.5 text-sm/relaxed text-white/95"> rusted expert residential flooring & repair services provide a comprehensive solution for all your flooring needs. Our dedicated experts transform living spaces through high-quality flooring services</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Flooring