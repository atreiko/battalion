import React from 'react'
import './about.scss';
import Title from '../../components/title/Title';
import Stars from '../../assets/stars/Stars'
import { Mission, Courage, Battalion } from '../index.js';

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='about__inner'>
        <div className='blur'></div>
        <div className='container'>
          <Title title='Про нас' titleClass='title-variant' />
          <h4>Спілка морських піхотинців України</h4>
        </div>
      </div>
      <div className='about__desc'>
        <div className='container'>
          <Mission />
          <Stars />
          <div className='about__soldiers'>
            <Courage />
            <Battalion />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About