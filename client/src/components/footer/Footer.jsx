import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="waves"></div>
      <div className="container">
        <div className='footer__inner'>
          <div className='footer__border'></div>
          <ul className='menu__list'>
            <li className='menu__item'>
              <h3>Про нас</h3>
              <div className='menu__item-links'>
                <Link className='menu__item-link' to='#about'>Опис</Link>
                <Link className='menu__item-link' to='#battalion'>Наші військові</Link>
                <Link className='menu__item-link' to='#courage'>Вічна пам'ять</Link>
              </div>
            </li>
            <li className='menu__item'>
              <h3>Мультимедіа</h3>
              <div className='menu__item-links'>
                <Link className='menu__item-link' to='/photos'>Фото</Link>
                <Link className='menu__item-link' to='/videos'>Відео</Link>
              </div>
            </li>
            <li className='menu__item'>
              <h3>Соціальні мережі</h3>
              <div className='menu__item-links socials'>
                <Link to='/about'><BsFacebook /></Link>
                <Link to='/about'><BsInstagram /></Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer