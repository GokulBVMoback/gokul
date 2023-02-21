import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@material-ui/core'
import {ContactPhone, WhatsApp, Mail, Facebook, Instagram, LinkedIn,GitHub} from '@material-ui/icons'
import './Contact.css'

const Contact = () => {
  return (
    <Element name='contact' className='contact'>
                <h1>Contact</h1>
    <div className='contact__container'>

        <div className='contactIcons'>
        <a href="tel:8825547037" target="_blank"><IconButton><ContactPhone /></IconButton></a>
        <a href="https://wa.me/qr/3OHXJCZL23CZM1" target="_blank"><IconButton><WhatsApp /></IconButton></a>
        <a href="mailto:bvgokulgok@gmail.com" target="_blank"><IconButton><Mail /></IconButton></a>
        <a href="https://www.facebook.com/bvgokul.gok" target="_blank"><IconButton><Facebook /></IconButton></a>
        <a href="https://instagram.com/b.v.gokul?igshid=YmMyMTA2M2Y=" target="_blank"><IconButton><Instagram /></IconButton></a>
        <a href="https://www.linkedin.com/in/gokul-b-v-38a917231" target="_blank"><IconButton><LinkedIn /></IconButton></a>
        <a href="https://github.com/GokulBVMoback" target="_blank"><IconButton><GitHub /></IconButton></a>
        </div>
    </div>
    </Element>
  )
}

export default Contact