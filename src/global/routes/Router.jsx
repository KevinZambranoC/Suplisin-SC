import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../../components/Home/Home'
import { About } from '../../components/About/About'
import { Services } from '../../components/Services/Services'
import { Projects } from '../../components/Projects/Projects'
import { Contact } from '../../components/Contact/Contact'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact/>} />

            <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}
