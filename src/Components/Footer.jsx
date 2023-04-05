import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='footer'>
      <a href='https://github.com/connor-cs' className='footer-icon'><BsGithub className="icon" size={65} /></a>
      <a href='' className='footer-icon'><BsLinkedin className="icon" size={65} /></a>
    </div>
  )
}
