import React from 'react'
import { Element } from 'react-scroll'
import Header from './Header'
import Home from './Home'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Contact from './Contact'


const Base = () => {
  return (
        <div className='base'>
            <Header/>
            <Home />
            <Education />
            <Skills />
            <Experience />
            <Contact />
        </div>
    )
}

export default Base