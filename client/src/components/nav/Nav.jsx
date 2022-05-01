import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'
import { Squeeze as Hamburger } from 'hamburger-react'

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Hamburger 
          toggled={isOpen} 
          toggle={setIsOpen} 
          color='#fff' 
        />
        <Link 
          onClick={ () => setIsOpen() } 
          to='/'
        >
          <span>ШТУРМ</span>
        </Link>
      </div>
    </nav>
  )
}

export default Nav