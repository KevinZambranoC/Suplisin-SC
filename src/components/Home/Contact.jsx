import React from 'react'

export const Contact = () => {
    return (
        <div className='h-32 bg-offWhite  w-full '>
            <div className=' w-[85%] xl:w-2/3 m-auto bg-cyanBlue flex flex-col justify-between items-center md:flex-row lg:p-12 h-96 md:h-48 text-white relative top-[-60px] md:top-[-80px] shadow-2xl'>
                <div className='w-full md:w-2/5 lg:w-2/3 h-36 text-center flex justify-center items-start ml-4 md:ml-8 flex-col'>
                    <p className='ml-3 font-semibold tracking-wide'>Contact Services</p>
                    <div className='flex flex-row pt-3'>
                        <ion-icon id="number" name="call-outline"></ion-icon>
                        <h4 className='text-3xl lg:text-4xl pl-2'><a href="https://api.whatsapp.com/send?phone=13213307462">+1 (321) 330 7462</a></h4>
                    </div>
                </div>
                <div className='w-full md:w-1/3 h-36 text-center flex justify-center items-start md:items-center ml-4 md:ml-8 flex-col'>
                    <h5 className='ml-3 pb-3 font-semibold tracking-wide'>WORKING HOURS</h5>
                    <div className='flex flex-row'>
                        <div className='relative top-[-15%] mr-3'><ion-icon id="time" name="time-outline"></ion-icon></div>
                        <div className='flex flex-col mt-1'>
                            <p>Mon - Sat 8:00am - 5:00pm</p>
                            <div className='text-gray-800 pt-1 font-semibold'><p>Sunday CLOSED</p></div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/3 h-36  text-center flex md:items-center items-start ml-4 md:ml-8 justify-center flex-col'>
                    <h5 className='mr-2 pb-3 font-semibold tracking-wide'>LOCATION</h5>
                    <div className='flex flex-row'>
                    <div className='relative top-[-15%] mr-2'><ion-icon id="location" name="location-outline"></ion-icon></div>
                        <p>14340 Island Cove Dr, <br /> Orlando FL 32824 US</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
