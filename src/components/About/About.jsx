import React from 'react'
import { Banner } from './banner'
import Info from './Info'
import { Stats } from './Stats'
import { Team } from './Team'

export const About = () => {
    return (
        <>
            <Banner />
            <Team />
            <Info/>
            <Stats/>
        </>
        
    )
}
