import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className='nav'>
        <img src = "image/bansal.png" alt="" />     
        <ul className='links'>
            <li><Link to='/'>Home</Link></li>   
            <li><Link to='/about'>About us</Link></li>   
            <li><Link to='/product'>Products</Link></li>
            <li><Link to='/blog'>Blogs</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul> 
    </nav>
  )
}
