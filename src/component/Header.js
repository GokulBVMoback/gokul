import React from 'react'
import {Link} from 'react-scroll'
import { IconButton } from '@material-ui/core'
import {HomeSharp, School, LibraryBooks, Build, Contacts} from '@material-ui/icons'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h1>
                Gokul<span> B V</span>
            </h1>
        </div>
        <div className='header__right'>

        <Link to="home" smooth={true} duration={500}>
        <IconButton><HomeSharp/></IconButton><h4>Home</h4>
        </Link>
        <Link to="education" smooth={true} duration={500}>
        <IconButton><School/></IconButton><h4>Education</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
        <IconButton><LibraryBooks/></IconButton><h4>Skills</h4>
        </Link>
        <Link to="exp" smooth={true} duration={500}>
        <IconButton><Build/></IconButton><h4>Experience</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
        <IconButton><Contacts/></IconButton><h4>Contact</h4>
        </Link>
        </div>

    </div>
  )
}

export default Header