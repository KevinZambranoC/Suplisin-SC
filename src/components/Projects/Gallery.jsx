import React from 'react'

export const Gallery = () => {
    return (
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-16">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/0GHyw1F/Whats-App-Image-2024-06-09-at-1-45-31-PM-11.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/nMXqKvf/Whats-App-Image-2024-06-09-at-1-45-31-PM-10.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/MBTFYs4/Whats-App-Image-2024-06-09-at-1-45-31-PM-3.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/XDx3fM9/Whats-App-Image-2024-06-09-at-1-45-32-PM-2.jpg" alt="" />
            </div>
        </div>
    )
}
