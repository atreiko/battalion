import React from 'react'
import Card from '../card/Card'
import './gallery.scss'

const Gallery = ({ cards }) => {

  return (
    <>
      <ul className='gallery'>
        {
          cards?.map(item => (
            <Card
              id={item._id}
              key={item._id} 
              title={item.title} 
              subtitle={item.rank} 
              image={item.image} 
            />
          ))
        }
      </ul>
    </>
  )
}

export default Gallery