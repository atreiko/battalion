import React from 'react'
import './title.scss'

const Title = ({ title, titleClass = 'title' }) => {
  return (
    <h2 className={titleClass}>
      {title}
    </h2>
  )
}

export default Title 