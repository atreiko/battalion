import React, { useState }  from 'react'
import './header.scss'
import { Nav, Menu } from '../index'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}

export default Header

