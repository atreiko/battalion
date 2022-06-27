import React, { useState, useEffect } from 'react'
import '../index.scss'
import { Gallery, Container, Title, Pagination } from '../components'
import { useFetching } from '../hooks/useFetching'
import PostService from '../api/PostService'
import Loader from '../components/loader/Loader'
import { motion } from 'framer-motion'

const Soldiers = () => {
  const [ cards, setCards ] = useState([])
  const [ fetchCards, cardsLoading, cardsError ] = useFetching(async () => {
    const items = await PostService.getSoldiersPosts()
    setCards(items.data)
  })

  const [ cardsPerPage ] = useState(9)
  const [ currentPage, setCurrentPage ] = useState(1)

  const lastCardIndex = currentPage * cardsPerPage
  const firstCardIndex = lastCardIndex - cardsPerPage
  const currentCards = cards.slice(firstCardIndex, lastCardIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)

  useEffect(() => {
      fetchCards()
  }, [])

  return (
    <motion.div 
      className='soldiers'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='soldiers__inner'>
        <div className='blur'></div>
        <Container>
          <Title title='Військові' titleClass='title-primary' />
          <h4>Батальон Штурм</h4>
        </Container>
      </div>
      <div className='soldiers__content'>
        <Container>
          <Title title='Склад морських піхотинців' titleClass='title-secondary'/>
          <Gallery cards={currentCards} />
          <Pagination 
            cardsPerPage={cardsPerPage} 
            totalCards={cards.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
            currentPage={currentPage}
          />
        </Container> 
        {cardsLoading && <Loader />}
        {cardsError && cardsError}
      </div>
    </motion.div>
  )
}

export default Soldiers