import React from 'react'
import Carousel  from './Carousel'
import { Contact } from './Contact'
import './home.css'

const slides = [
    " https://picsum.photos/2114/1080?random=1",
    " https://picsum.photos/2114/1080?random=2",
    " https://picsum.photos/2114/1080?random=3"
]

export const Home = () => {
    return (
        <>
            <main>
                <Carousel />
                <Contact/>
            </main>
        </>
    )
}
