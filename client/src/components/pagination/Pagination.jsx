import React from 'react'
import './pagination.scss'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Pagination = ({ 
  cardsPerPage, 
  totalCards, 
  paginate, 
  prevPage, 
  nextPage,
  currentPage
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='pagination'>
      <ul className="pagination__list">
        <>
          <button 
            onClick={prevPage} 
            className='pagination__btn' 
            disabled={currentPage <=1 ? true : false}
          >
            <BsChevronLeft />
          </button>
          {
            pageNumbers.map(number => (
                <li key={number} className={
                  currentPage === number ? `pagination__number pagination__active` : `pagination__number `
                }>
                  <a href="#" 
                  className="pagination__link"
                  onClick={() => paginate(number)}
                  >
                    { number }
                  </a>
                </li>
              ))
            }
            <button 
              onClick={nextPage} 
              className='pagination__btn'
              disabled={currentPage >= totalCards / cardsPerPage ? true : false}
            >
              <BsChevronRight />
            </button>
        </>
      </ul>
    </div>
  )
}

export default Pagination