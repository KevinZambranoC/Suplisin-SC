import React from 'react'

export const Contact = () => {
    return (
        <div className='h-auto bg-offWhite w-full'>
    <div className='w-[85%] xl:w-2/3 m-auto bg-cyanBlue flex flex-col md:flex-row flex-wrap justify-between items-center lg:p-12 h-auto md:h-auto text-white relative top-[-60px] md:top-[-80px] shadow-2xl'>
        
        <div className='w-full sm:w-2/3 md:w-1/3 lg:w-1/3 h-auto text-center flex justify-center items-start md:items-center ml-4 md:ml-0 flex-col p-4'>
            <p className='ml-1 font-semibold tracking-wide'>Numero de Contacto</p>
            <div className='flex flex-row pt-6 items-center'>
                <ion-icon id="number" name="call-outline"></ion-icon>
                <h4 className='text-3xl lg:text-3xl pl-2'><a href="https://api.whatsapp.com/send?phone=5804247646749">+58 0424 - 7646749</a></h4>
            </div>
        </div>

        <div className='w-full sm:w-2/3 md:w-1/3 lg:w-1/3 h-auto text-center flex justify-center items-start md:items-center ml-4 md:ml-0 flex-col p-4'>
            <h5 className='pb-3 font-semibold tracking-wide'>Horas de Trabajo</h5>
            <div className='flex flex-row items-center'>
                <div className='relative lg:top-[10%] 2xl:top-[0%] mr-3'>
                    <ion-icon id="time" name="time-outline"></ion-icon>
                </div>
                <div className='flex flex-col'>
                    <p>Lun - Sab 8:00am - 5:00pm</p>
                    <div className='text-white font-semibold'>
                        <p>Domingo CERRADO</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full sm:w-2/3 md:w-1/3 lg:w-1/3 h-auto text-center flex justify-center items-start md:items-center ml-4 md:ml-0 flex-col p-4'>
            <h5 className='pb-3 font-semibold tracking-wide'>Ubicación</h5>
            <div className='flex flex-row items-center'>
                <div className='relative lg:top-[10%] 2xl:top-[0%] mr-3'>
                    <ion-icon id="location" name="location-outline"></ion-icon>
                </div>
                <div className='flex flex-col'>
                    <p>Calle #4, 6-27 Táriba- Edo Táchira - Venezuela</p>
                    <div className='text-black font-semibold empty:hidden'>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
