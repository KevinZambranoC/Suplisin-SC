import React from 'react'
import { Carousel }  from './Carousel'
import { Contact } from './Contact'
import { Info } from './Info'
import { Texture } from './Texture'
import { Projects } from './Projects'
import './home.css'

export const Home = () => {
    return (
        <>
            <main>
                <Carousel />
                <Contact />
                <Info />
                <Texture />
                <Projects />
            </main>
        </>
    )
}
