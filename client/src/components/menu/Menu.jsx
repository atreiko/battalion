import React from 'react'
import './menu.scss'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Menu = ({ isOpen, setIsOpen }) => {

  return (
    <div className={!isOpen ? 'menu' : 'menu active'}>
      <ul className='menu__list'>
        <li className='menu__item'>
          <h3>Про нас</h3>
          <div className='menu__item-links'>
            <Link onClick={ () => setIsOpen() } className='menu__item-link' to='/'>Опис</Link>
            <Link onClick={ () => setIsOpen() } className='menu__item-link' to='/soldiers'>Наші військові</Link>
            <Link onClick={ () => setIsOpen() } className='menu__item-link' to='/valor'>Вічна пам'ять</Link>
          </div>
        </li>
        <li className='menu__item'>
          <h3>Мультимедіа</h3>
          <div className='menu__item-links'>
            <Link onClick={ () => setIsOpen() } className='menu__item-link' to='/photos'>Фото</Link>
            <Link onClick={ () => setIsOpen() } className='menu__item-link' to='/videos'>Відео</Link>
          </div>
        </li>
        <li className='menu__item'>
          <h3>Соціальні мережі</h3>
          <div className='menu__item-links socials'>
            <Link onClick={ () => setIsOpen() } to='https://www.facebook.com/'><BsFacebook /></Link>
            <Link onClick={ () => setIsOpen() } to='https://www.instagram.com/'><BsInstagram /></Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Menu