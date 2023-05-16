import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
      <NavLink className="link" to="/">Home</NavLink>
      <NavLink className="link" to="/projects">Projects</NavLink>
      {/* <NavLink className="link" to="/about">About</NavLink> */}
      <NavLink className="link" to="/contact">Contact</NavLink>
    </div>
  )
}
