import React, { useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { PiPaintBrushBroadBold } from 'react-icons/pi';
import { FaHammer } from 'react-icons/fa';

function Carousel  (){
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
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
            <div className=' h-[920px] relative group'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className=' h-full  bg-center bg-cover duration-500'>
                    <div  className='relative md:h-80 justify-center h-64 m-auto top-52 rounded-xl  flex flex-col  items-center  text-blackBlue bg-gray-200/[.35] w-full lg:w-1/2'>
                        <p className='font-semibold text-xl pb-4'>Drywall Texture</p>
                        <h1 className='lg:text-7xl md:text-6xl text-4xl lg:w-auto w-3/4 font-bold text-center leading-semiloose'>Need new Drywall, Finish, Texture or Paint? <br />Do it right!</h1>
                    </div>
                    <div className='w-3/6 relative mx-auto  top-1/3 h-48 flex flex-row items-center justify-center text-gray-800 shadow-2xl'>
                        <div className='bg-slate-50 w-1/3 h-52 text-center rounded-l-xl'>
                        <FaHammer className='m-auto py-7 ' size={95} />
                            <h3 className='font-bold'>Drywall Installation</h3>
                            <p className='leading-6 pt-1'>We specialize in providing top-quality drywall services for Residential clients.</p>
                        </div>
                        <div className='bg-slate-100 w-1/3 h-64 text-center rounded-lg'>
                            <h3 className='font-bold'>Taping, finishing and texture</h3>
                            <p className='leading-6 p-1'>The company offers drywall taping and finishing services to create a smooth surface. They also provide texture application services for clients who desire a specific texture on their drywall surfaces.</p>
                        </div>
                        <div className='bg-slate-200 w-1/3 h-52 text-center rounded-r-xl'>
                            <PiPaintBrushBroadBold className='m-auto py-4 ' size={80} />
                            <h3 className='font-bold'>Interior & Exterionr Painting</h3>
                            <p className='leading-6 pt-1'>Professional hause painter, Contractor providing interior and exterior painting for Residential and Comercial.</p>
                        </div>
                    </div>
            
                </div>
              {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={nextSlide} size={30} />
                </div>
              {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex relative top-[-5%] justify-center'>
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

export default Carousel