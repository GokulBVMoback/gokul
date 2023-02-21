import React from 'react'
import { Element } from 'react-scroll'
import MyPDF from '../assets/Gokul_resume.pdf';
import {Link} from "react-router-dom";
import "./Home.css"



const Home = () => {
  return (
        <Element name="home" className='home'>
            <div className='topContent'>
                <div className='topContent__container'>
                    <h1>Gokul B V</h1>
                    <p>Passionated developer</p>
                    <a href={MyPDF} download="Gokul_resume.pdf">
                        <button className='downloadCV'>Download CV</button>
                    </a>
                    <Link to="/about" ><button className='knowmore'>Know more</button></Link>
                </div>
            </div>
        </Element>
    )
}

export default Home