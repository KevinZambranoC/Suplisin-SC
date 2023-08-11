import React from 'react'
import Nav from '../../global/components/Nav/Nav'
import Footer from '../../global/components/Footer'
import Carousel  from './Carousel'
import './home.css'

const slides = [
    " https://picsum.photos/2114/1080?random=1",
    " https://picsum.photos/2114/1080?random=2",
    " https://picsum.photos/2114/1080?random=3"
]

export const Home = () => {
    return (
        <>
            <Nav />
                    <Carousel />
            <Footer/>
        </>
    )
}
