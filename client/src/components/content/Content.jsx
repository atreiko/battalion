import React, { useEffect, useState } from 'react'
import './content.scss'
import Modal from '../modal/Modal';
import Title from '../title/Title'
import axios from 'axios';

const Content = ({ data, title }) => {
  // photos/modal
  const [ photoGallery, setPhotoGallery ] = useState(data)
  const [ clickedImage, setClickedImage ] = useState(null)
  const [ currentIndex, setCurrentIndex ] = useState(null)
  // dynamic pagination
  // const [ items, setItems ] = useState([]) //todo uncomment for example
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ fetching, setFetching ] = useState(true)
  const [ totalCount, setTotalCount ] = useState(0) 

  // useEffect(() => {
  //   if (fetching) {
  //     console.log(fetching);
  //     axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
  //       .then(response => {
  //         setItems([...items, ...response.data])
  //         setCurrentPage(prev => prev + 1)
  //         setTotalCount(response.headers['x-total-count'])
  //       }) 
  //       .finally(() => setFetching(false))
  //   } 
  // }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return () => {
      document.addEventListener('scroll', scrollHandler)
    }
  }, [])
  // pagination
  const scrollHandler = (e) => {
    // 1210 - (2 + 702) < 100
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 
    && photoGallery.length < totalCount) { //todo replace for example -> items.length < totalCount
    // && items.length < totalCount) {
      console.log('scroll');
      setFetching(true) 
    }
  } 
  // modal
  const handleClick = (item, index) => {
    setClickedImage(item.url)
    setCurrentIndex(index)
  }

  const handleRotationRight = () => {
    const totalLength = photoGallery.data.length 

    if (currentIndex + 1 >= totalLength) { 
      setCurrentIndex(0)
      const newUrl = photoGallery.data[0].url
      setClickedImage(newUrl)
      return
    }

    const newIndex = currentIndex + 1
    const newUrl = photoGallery.data.filter(item => {
      return photoGallery.data.indexOf(item) === newIndex
    })

    const newItem = newUrl[0].url
    setClickedImage(newItem)
    setCurrentIndex(newIndex)
  }

  const handleRotationLeft = () => {
    const totalLength = photoGallery.data.length

    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = photoGallery.data[totalLength - 1].url
      setClickedImage(newUrl)
      return
    }

    const newIndex = currentIndex - 1
    const newUrl = photoGallery.data.filter((item) => {
      return photoGallery.data.indexOf(item) === newIndex
    })

    const newItem = newUrl[0].url
    setClickedImage(newItem)
    setCurrentIndex(newIndex)
  };

  return (
    <section className='content'>
      <Title titleClass='title-primary' title={title} />
      <div className='content__list'>
        {photoGallery?.data.map((item, index) => (
          <div className='content__item' key={item._id}>
            <img 
              src={item.url} 
              alt={item.text}
              onClick={() => handleClick(item, index)} 
            /> 
            <h3>Item text</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique.</p>
          </div>
          ))  
        }

        {/* {image ? items.map(item =>        //todo uncomment for example
          <div key={item.id}>
            <div>{item.id} {item.title}</div>
            <img src={item.thumbnailUrl} alt="photo" />
          </div>
        ) : (
          items.map((item, index) =>
            <div className='content__item' key={index}>
              <ReactPlayer 
                url={item.url}
              />
            </div>  
          )
        )} */}
      </div>
      {clickedImage && 
        <Modal 
          clickedImage={clickedImage} 
          handleRotationRight={handleRotationRight}
          setClickedImage={setClickedImage} 
          handleRotationLeft={handleRotationLeft}
        />
      }
    </section>
  )
}

export default Content