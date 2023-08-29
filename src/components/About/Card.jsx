import React from 'react'
import { Link } from 'react-router-dom'

export const Card = () => {
    return (
        <div className='h-[460px] md:h-48 bg-offWhite w-full '>
            <div className=' w-[85%] xl:w-2/3 m-auto bg-cyanBlue flex flex-col justify-between items-center md:flex-row text-white relative top-[-60px] md:top-[-125px] shadow-2xl'>
                <article className="overflow-hidden shadow transition hover:shadow-lg grid grid-cols-1 md:grid-cols-2 ">
                    <img alt="Office" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="h-64 w-full object-cover"/>
                    <div className="bg-white p-4 sm:p-6">
                        <a href="#">
                            <h3 className=" text-xl text-darkBlue mt-3">Industrial Flooring systems</h3>
                        </a>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
                        </p>
                        <div className="mt-10 text-center">
                                <Link to='/projects' className="inline-block rounded bg-cyanBlue px-12 py-3 text-sm font-medium  transition hover:bg-darkBlue text-white shadow-xl focus:outline-none focus:ring focus:ring-yellow-400">Read More</Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}
