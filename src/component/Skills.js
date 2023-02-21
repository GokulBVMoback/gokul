import React from 'react'
import { Element } from 'react-scroll'
import skill from "../assets/1676554248410.jpg"
import { LinearProgress } from '@material-ui/core'
import "./Skills.css"


const Skills = () => {
  return (
    <Element name="skills" className='skillsContainer'>
        <div className='skillsContainer__image'>
            <img src={skill} alt="skills" />
        </div>
        <div className='skillsContainer__text'>
          <h2>Skills</h2>
          <div className='skillsContainer__skills'>
            <h5>React</h5>
            <div className='skillContainer__slider skillContainer__slider1'>
              <LinearProgress variant='determinate' value={40} />
            </div>
          </div>
          <div className='skillsContainer__skills'>
            <h5>C# .NET</h5>
            <div className='skillContainer__slider skillContainer__slider2'>
              <LinearProgress variant='determinate' value={75} />
            </div>
          </div>
          <div className='skillsContainer__skills'>
            <h5>SQL Server</h5>
            <div className='skillContainer__slider skillContainer__slider3'>
              <LinearProgress variant='determinate' value={80} />
            </div>
          </div>
          <div className='skillsContainer__skills'>
            <h5>GitHub</h5>
            <div className='skillContainer__slider skillContainer__slider4'>
              <LinearProgress variant='determinate' value={70} />
            </div>
          </div>
        </div>
    </Element>
  )
}

export default Skills