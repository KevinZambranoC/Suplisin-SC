import React from 'react'

export const Team = () => {
    return (
        <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat sm:h-[620px] md:h-[460px]">
        <div className="absolute inset-0 bg-white/10 bg-transparent from-white/100 to-white/80 bg-gradient-to-r"></div>
        <div className=" ml-30 relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:h-screen lg:items-top">
            <div className="w-2/3 h-96 text-center sm:text-left mt-4 m-auto sm:m-0">
                <h1 className="text-4xl font-extrabold sm:text-5xl text-darkBlue">We have over 10 years experience in work construction.
                </h1>
                <div className='flex flex-col my-8 md:flex-row'>
                    <div className='flex flex-col'>
                        <p className="w-36 text-bold sm:text-2xl/relaxed text-darkBlue">Miguel Angel Garcia</p>
                        <p className='text-md text-bold '>Compay CEO</p>
                    </div>
                
                    <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""  className='w-1/3 md:block'/>
                </div>
            </div>
        </div>
    </section>
    )
}
