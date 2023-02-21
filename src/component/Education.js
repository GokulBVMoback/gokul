import React from 'react'
import {Element} from 'react-scroll'
import './Education.css'

const Education = () => {
  return (
    <Element  name="education" className='education' >
        <div className='educ'>
        <center class="edu">
        <table class="table">
            <tr>
                <th>Class/Course</th>
                <th>Institute</th>
                <th>Board/University</th>
                <th>Year of Passed out</th>
                <th>Percentage</th>
            </tr>
            <tr>
                <td>SSLC</td>
                <td>Govt.Hr.Sec.School, Vallankumaranvilai</td>
                <td>State Board</td>
                <td>2015</td>
                <td>72%</td>
            </tr>
            <tr>
                <td>HSC(Computer Science)</td>
                <td>Govt.Hr.Sec.School, Vallankumaranvilai</td>
                <td>State Board</td>
                <td>2017</td>
                <td>67%</td>
            </tr>
            <tr>
                <td>B.Sc(Computer Science)</td>
                <td>Sivanthi Aditanar College, Pillayarpuram</td>
                <td>Manonmanium Sundaranar University</td>
                <td>2020</td>
                <td>62%</td>
            </tr>
            <tr>
                <td>M.C.A</td>
                <td>Sivanthi Aditanar College, Pillayarpuram</td>
                <td>Manonmanium Sundaranar University</td>
                <td>2022</td>
                <td>84%</td>
            </tr>
        </table>
</center>
</div>
    </Element>
  )
}

export default Education