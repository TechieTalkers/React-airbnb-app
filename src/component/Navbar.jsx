import React from 'react'
import logo from '../images/airbnb-logo.png'
import '../style/Navbar.css'


const Navbar=()=>{
    return(
        <nav className='navbar'>
            <img src={logo}></img>
        </nav>
    )
}

export default Navbar;