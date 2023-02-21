import React from 'react'
import { Element } from 'react-scroll'
import './Experience.css'

const Experience = () => {
  return (
        <Element name='exp' className='exp'>
            <div className='exp__container'>
        <center class="exp__center">
        <table class="table">
            <tr>
                <th>Organization</th>
                <th>Role</th>
                <th>Joining Date</th>
            </tr>
            <tr>
                <td>Agape Works</td>
                <td>Intern</td>
                <td>06/04/2022</td>
            </tr>
            <tr>
                <td>Moback Technologies</td>
                <td>Software Engineer Intern</td>
                <td>12/09/2022</td>
            </tr>
        </table>
</center>
</div>
        </Element>
    )
}

export default Experience