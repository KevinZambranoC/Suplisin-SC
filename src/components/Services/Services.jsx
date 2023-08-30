import React from 'react'
import { Cards } from './Cards';
import { Banner } from './Banner';
import { ServiceInfo } from './ServiceInfo';
import { Dropdown } from './Dropdown';
import Flooring from './Flooring';

export const Services = () => {

    return (
        <>
            <Banner/>
            <Cards/>
            <ServiceInfo />
            <Dropdown />
            <Flooring/>
        </>
    )
}
