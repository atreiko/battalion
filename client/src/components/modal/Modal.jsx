import React from 'react'
import './modal.scss'
import ReactPlayer from 'react-player' 

const Modal = ({ 
  clickedImage, 
  handleRotationRight, 
  setClickedImage, 
  handleRotationLeft,
  setClickedMovie,
  clickedMovie
}) => {

  const handleClick = e => {
    if (e.target.classList.contains('cancel')) {
      setClickedImage && setClickedImage(null)
      setClickedMovie && setClickedMovie(null)
      // setClickedImage ? setClickedImage(null) : setClickedMovie(null)
      // setClickedImage(null) && setClickedMovie(null)
    }
  }

  return ( 
    <>
      <div className='overlay cancel' onClick={handleClick}>
        {clickedImage && <img src={clickedImage} alt='bigger-picture' />}
        {clickedMovie && <ReactPlayer url={clickedMovie} controls={true} />}
        <span className='cancel' onClick={handleClick}>X</span>
        {clickedImage && (
          <>
            <div className='overlay__arrows-left' onClick={handleRotationLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className='overlay__arrows-right' onClick={handleRotationRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Modal