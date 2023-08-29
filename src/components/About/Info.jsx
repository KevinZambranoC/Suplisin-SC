import React from 'react'

const Info = () => {
    return (
        <section className="bg-offWhite">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid  lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className=" text-gray-600 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-darkBlue dark:text-white">Underlay Laminate Flooring Service & Wooden Floors</h2>
                    <p className="mb-4 font-semibold text-darkBlue text-lg">We are committed to making your floor look its best and for you to be completely satisfied with our service.</p>
                    <p>It's all about Floors! Renowise Flooring Services is a family owned and operated business that prioritizes doing the job the RIGHT way. We specialize in the sale and installation of hardwood flooring in it's many forms as well as carpet and tile.</p>
                    <p>The combination of industry leading knowledge and years of experience make Renowise Flooring Services the optimal choice for your flooring project. Renowise Flooring Services has certifications from the EPA, Elastilon and the National Wood Flooring Association (NWFA),  making us a cut above the rest. Hardwood flooring is our specialty, but we are a professional flooring service that can accommodate your project no matter what the size! Remember: right floor, right price, right people. Do it RIGHT.</p>
                    <div className="mt-4">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-darkBlue pt-3">Concrete Surface Preparation</dt>
                            <dd className="text-4xl font-extrabold text-gray-600 md:text-5xl">
                                25
                            </dd>
                        </div>
                        <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                            <dt className="order-last text-lg font-mediumtext-darkBlue pt-3">Sand & Finish Hardwood Floors</dt>
                            <dd className="text-4xl font-extrabold text-gray-600 md:text-5xl">
                                750
                            </dd>
                        </div>
                        <div className="flex flex-col rounded-lg px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-darkBlue pt-3">Granite and Counter Sufaces</dt>
                            <dd className="text-4xl font-extrabold text-gray-600 md:text-5xl">1000+</dd>
                        </div>
                    </dl>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1634586621169-93e12e0bd604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="demolition"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="wall tiles"/>
                </div>
            </div>
        </section>
    )
}

export default Info