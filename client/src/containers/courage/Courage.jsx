import React from 'react'
import './courage.scss'
import { Link } from 'react-router-dom';
import ArrowRight from '../../assets/ArrowRight.jsx';

const Courage = () => {
  return (
    <div id='courage' className='courage'>
      <h6 className='courage__subtitle'>Відвага</h6>
      <div className='courage__left'>
        <h4 className='about__title'>Герої, які загинули в боротьбі</h4>
      </div>
      <div className='courage__right'>
        <p>
          Україна сьогодні переживає найбільше випробування в своїй новітній історії – 
          збройну боротьбу за незалежність і територіальну цілісність проти російського агресора. 
          У цій війні ми вже маємо тисячі поранених і загиблих мужніх оборонців. 
          Вони стоять в одному ряду з поколіннями борців за волю і державну самостійність. 
          Воїни Русі-України, лицарі Костянтина Острозького, козаки Петра Сагайдачного...
        </p>
        <p>
          <Link to='/valor'>
            Інформаційні матеріали
            <ArrowRight />
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Courage