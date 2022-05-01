import React, { useEffect, useState } from 'react'
import '../index.scss';
import { motion } from 'framer-motion'
import Content from '../components/content/Content';
import { useFetching } from '../hooks/useFetching';
import PostService from '../api/PostService';

const Photos = () => {
  const [ photos, setPhotos ] = useState([])
  const [ fetchPhotos, photosLoading, photosError ] = useFetching(async () => {
    const items = await PostService.getPhotoPosts()
    setPhotos(items)
  })

  const [ currentPage, setCurrentPage ] = useState(1)
  const [ fetching, setFetching ] = useState(true)
  const [ totalCount, setTotalCount ] = useState(0) 

  useEffect(() => {
    if (fetching) {
      fetchPhotos()
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.addEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    // 1210 - (2 + 702) < 100
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 
    && photos.length < totalCount) { 
      console.log('scroll');
      setFetching(true) 
    }
  } 

  console.log(photos);

  return (
    <motion.div className='photos'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <Content 
        data={photos} 
        title='Фото'
      /> */}
    </motion.div>
  )
}

export default Photos