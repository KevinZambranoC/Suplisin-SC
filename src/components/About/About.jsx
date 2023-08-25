import React from 'react'
import { Banner } from './Banner'
import Info from './Info'
import { Stats } from './Stats'
import { Team } from './Team'
import { Card } from './Card'

export const About = () => {
    return (
        <>
            <Banner />
            <Team />
            <Info/>
            <Stats/>
            <Card />
        </>
        
    )
}
