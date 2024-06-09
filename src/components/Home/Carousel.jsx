import React, { useState } from 'react'

export const Carousel = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        //https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80
        {
            url: 'https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?w=1000&auto=format&fit=crop&q=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXMlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D',
        },
        {
            url: 'https://images.unsplash.com/photo-1553946550-4b8f3eea5451?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);            
        const prevSlide = () => {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
        };
        
        const nextSlide = () => {
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        };
        
        const goToSlide = (slideIndex) => {
            setCurrentIndex(slideIndex);
        };
        
        return (
            <div className=' h-[780px] md:h-[1080px] relative group'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className=' h-full  bg-center bg-cover duration-500'>
                    <div  className='relative lg:h-96 justify-center h-80 m-auto lg:top-32 top-32 md:top-52 rounded-xl  flex flex-col  items-center  text-blackBlue bg-gray-200/[.35] w-full xl:w-1/2'>
                        <p className='font-semibold text-xl pb-2 mt-4'>Suplisin LLC </p>
                        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:w-auto w-3/4 font-bold text-center leading-semiloose'>Zapatos de construcción duraderos para tu seguridad. <br />Para toda la vida!</h1>
                    </div>
                    <div className='relative top-48 md:top-56  md:hidden h-24 flex-col flex items-center justify-center w-72 text-center m-auto text-white'>
                        <button className='h-14 w-5/6 rounded-full bg-darkBlue font-medium tracking-wider'>Request Service</button>
                        <p className='pt-1  tracking-wide'>Get in touch for a custom quote</p>
                    </div>
                    <div className='w-auto mt-4 xl:w-3/5 bg-white relative mx-auto top-64 lg:top-48 h-48 hidden md:flex flex-row items-center justify-center text-gray-800 shadow-2xl'>
                        <div className='  bg-slate-50 w-1/3 bg-white md:h-52 text-center rounded-l-xl'>
                            <div className='mt-6 card__icon'><ion-icon name="car-outline"  id='card__icon' ></ion-icon></div>
                            <h3 className='font-bold'>Distribución de Calzado</h3>
                            <p className='leading-6 p-1'>Especialistas en distribución profesional de calzado seguro y duradero.</p>
                        </div>
                        <div className='bg-slate-100 w-1/3 bg-white md:h-64 text-center rounded-lg shadow-2xl'>
                            <div className='mt-6 card__icon'><ion-icon name="storefront-outline"  id='card__icon' className='text-4xl border-2 border-black p-2 rounded-full' ></ion-icon></div>
                            <h3 className='font-bold'>Venta detal y al mayor</h3>
                            <p className='leading-6 pb-3'>Profesionales en venta al detal y al mayor. Especializados en calzado de construcción seguro, duradero y confiable para todos los trabajos.</p>
                        </div>
                        <div className=' bg-slate-200 w-1/3 bg-white md:h-52 text-center rounded-r-xl'>
                            <div className='mt-4 text-black'><ion-icon id='card__icon' name="shield-checkmark-outline"></ion-icon></div>
                            <h3 className='font-bold'>Seguridad al cliente</h3>
                            <p className='leading-6 pt-1'>Seguridad garantizada en cada venta y distribución con profesionalismo absoluto.</p>
                        </div>
                    </div>
            
                </div>
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] lg:top-[40%] md:top-[33%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full  w-12 h-12 p-2.5 bg-black/20 text-white cursor-pointer'>
                    <ion-icon name="chevron-back-outline" id="button" onClick={nextSlide}></ion-icon>
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] lg:top-[40%] md:top-[33%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full  w-12 h-12 p-2.5 bg-black/20 text-white cursor-pointer'>
                    <ion-icon name="chevron-forward-outline"  id="button" onClick={prevSlide}></ion-icon>
                    </div>
                <div className='flex relative top-[-15%] md:top[-13%] justify-center'>
                {slides.map((slide, slideIndex) => (
                    <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer'
                    >
                        <ion-icon id="button" name="radio-button-off-outline"></ion-icon>
                    </div>
                    ))}
                </div>
            </div>
        );
}