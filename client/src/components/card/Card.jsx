import React from 'react'
import './card.scss';
import p1 from '../../assets/images/photos/15ma.jpeg'
import { Link, useParams } from 'react-router-dom';

const Card = ({ title, subtitle, image, id }) => {
  
  return (
    <li className='card'>
      <Link to={`/soldiers/${id}`} className='card__link'>
        <img src={image} alt='card-img' />
        <div className="card__content">
          <h6>
            { title }
          </h6>
          <div className='card__hidden'>
            <p className="card__body">
              { subtitle }
            </p>
            <div href='/#' className="card__foot">
              Детальніше
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Card