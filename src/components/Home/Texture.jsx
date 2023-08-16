import React from 'react'

export const Texture = () => {
    return (

    <section className="h-[1760px] sm:h-[1240px] lg:h-[860px] mb-56 overflow-hidden bg-[url(https://i.ibb.co/hg5Hvb0/machine.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/25 h-full p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl ">The Best Equipments to Guarantee Excelent Work</h2>
                <p className=" max-w-2xl text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed m-auto mt-6">If you're looking to add some personality and visual interest to your home's interior, textures are a great way to achieve that. From smooth and sleek to rough and rustic, there are plenty of popular types of texture to choose from when decorating your home.</p>
                <div className="p-4 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 ">
                    <div className="block bg-white/[.85] rounded-lg shadow-xl text-center">
                        <img alt="drywall" src="https://i.ibb.co/NptZMCd/drywall.jpg" className="h-64 rounded-t-lg w-full object-cover sm:h-80 lg:h-96"
                        />
                        <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:text-2xl ">Drywall </h3>
                        <p className="mt-2 m-auto max-w-sm text-gray-700">Drywall Installation</p>
                    </div>
                    <div className="block bg-white/[.85] rounded-lg shadow-xl">
                        <img alt="drywall_finish" src="https://i.ibb.co/v1dfZvW/finish.jpg" className="h-64 w-full rounded-t-lg  object-cover sm:h-80 lg:h-96"/>
                        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Finishing</h3>
                        <p className="mt-2 m-auto  max-w-sm text-gray-700">Finish Drywall</p>
                    </div>

                    <div className="block bg-white/[.85] rounded-lg shadow-xl">
                        <img alt="texture" src="https://i.ibb.co/qF2f3q6/knockdown.jpg" className="h-64 w-full rounded-t-lg  object-cover sm:h-80 lg:h-96"/>
                        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Texture </h3>
                        <p className="mt-2 m-auto  max-w-sm text-gray-700">Orange Peel</p>
                    </div>
                    <div className="block bg-white/[.85] rounded-lg shadow-xl">
                        <img alt="texture" src="https://i.ibb.co/Fb1nTH4/texture.jpg" className="h-64 w-full rounded-t-lg  object-cover sm:h-80 lg:h-96"/>
                        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Texture </h3>
                        <p className="mt-2 m-auto  max-w-sm text-gray-700">Knockdowm Texturte
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}
