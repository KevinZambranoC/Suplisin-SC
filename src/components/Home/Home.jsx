import React from 'react'
import { Carousel }  from './Carousel'
import { Contact } from './Contact'
import { Info } from './Info'
import { Texture } from './Texture'
import './home.css'

export const Home = () => {
    return (
        <>
            <main>
                <Carousel />
                <Contact />
                <Info />
                <Texture />
            </main>
        </>
    )
}
