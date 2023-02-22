import React from 'react'
import { Element } from 'react-scroll'
import {Link} from 'react-router-dom'
import './About.css'

const About = () => {
  return (
      <Element name='about' className='about'>
        <div className='about__container'>
        <center>
        <table class="know table">
            <tr>
            <th>Name</th>
            <td>Gokul B V</td>
        </tr>
        <tr>
            <th>DOB</th>
            <td>19/12/1999</td>
        </tr>
        <tr>
            <th>Age</th>
            <td>22</td>
        </tr>
        <tr>
            <th>Gender</th>
            <td>Male</td>
        </tr>
        <tr>
            <th>Father's Name</th>
            <td>Baskaran A</td>
        </tr>
        <tr>
            <th>Mother's Name</th>
            <td>Vijayajothi R</td>
        </tr>
        <tr>
            <th>Blood Group</th>
            <td>O+</td>
        </tr>
        <tr>
            <th>Permanent Address</th>
            <td>Melakrishnanputhoor,Kanyakumari dist</td>
        </tr>
        </table>
        </center>
        <div className='backbutton'>
        <Link to="/gokul" ><button className='back'>Back</button></Link>
        </div>
        </div>
      </Element>
    )
}

export default About