import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/personalinfo'>PersonalInfo</NavLink>
        <NavLink to='/skills'>Skills</NavLink>
        <NavLink to='/experience'>Experience</NavLink>
        <NavLink to='/education'>Education</NavLink>
    </div>
  )
}

export default Navbar