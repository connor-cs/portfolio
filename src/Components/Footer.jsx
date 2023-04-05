import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='footer'>
      <BsGithub className="icon" size={65} />
      <BsLinkedin className="icon" size={65} />
    </div>
  )
}
