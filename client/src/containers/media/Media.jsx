import React from 'react'
import './media.scss'
import Container from '../../components/container/Container'
import GreyStars from '../../assets/stars/GreyStars'
import { Link } from 'react-router-dom'

const Media = () => {
  return (
    <div className='media'>
      <Container>
        <div className='media__inner'>
          <div className='media__inner-decorations'></div>
          <div className='media__inner-text'>
            <h3>Україна - понад усе. Морська піхота - вільні завжди. Там де ми - там перемога.</h3>
            <GreyStars />
            <h6>З відео та фото контетом, можливо ознайомитись за посиланнями</h6>
            <p><Link to='/photos'>Фото</Link> матеріл морської піхоти</p>
            <p><Link to='/videos'>Відео</Link> матеріл зафіксований небайдужими під час бойових дій на території України</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Media