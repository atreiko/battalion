import React from 'react'
import './battalion.scss'
import { Link } from 'react-router-dom';
import ArrowRight from '../../assets/ArrowRight.jsx';

const Battalion = () => {
  return (
    <div id='battalion' className='battalion'>
      <h4 className='about__title title__center'>Батальон Штурм</h4>
      <div className='battalion__text'>
        <p>
          Морська піхота України складається із двох бригад у складі військ берегової оборони 
          Військово-морських сил України та входить до складу об'єднаних сил швидкого реагування.
          Озброєння морських піхотинців здебільшого складається з плавучої бойової техніки, переносних 
          протитанкових та зенітних комплексів та автоматичної стрілецької зброї.
        </p>
        <p>
          <Link to='/soldiers'>
            Детальніше про склад
            <ArrowRight />
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Battalion