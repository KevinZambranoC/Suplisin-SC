import React from 'react'

const Info = () => {
    return (
        <section className="bg-white">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className=" text-gray-600 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-darkBlue dark:text-white">Underlay Laminate Flooring Service & Wooden Floors</h2>
                    <p className="mb-4 font-semibold text-darkBlue text-lg">We are committed to making your floor look its best and for you to be completely satisfied with our service.</p>
                    <p>It's all about Floors! Renowise Flooring Services is a family owned and operated business that prioritizes doing the job the RIGHT way. We specialize in the sale and installation of hardwood flooring in it's many forms as well as carpet and tile.</p>
                    <p>The combination of industry leading knowledge and years of experience make Renowise Flooring Services the optimal choice for your flooring project. Renowise Flooring Services has certifications from the EPA, Elastilon and the National Wood Flooring Association (NWFA),  making us a cut above the rest. Hardwood flooring is our specialty, but we are a professional flooring service that can accommodate your project no matter what the size! Remember: right floor, right price, right people. Do it RIGHT.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
                </div>
            </div>
        </section>
    )
}

export default Info