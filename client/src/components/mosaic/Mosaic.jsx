import React, { useState, useEffect } from 'react'
import './mosaic.scss';
import { Link } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../api/PostService';
import Loader from '../loader/Loader';

const Mosaic = () => {
  const [ posts, setPosts ] = useState([])
  const [ fetchPosts, postsLoading, postsError ] = useFetching(async () => {
    const items = await PostService.getHomePosts()
    setPosts(items)
  })

  useEffect(() => {
    fetchPosts()
  }, []) 

  return (
    <div className='mosaic'>
      <ul className='mosaic__list'>
        {
          posts.data?.slice(0, 7).map((post, index) => (
            <li 
              key={post._id} 
              className={`mosaic__list-item item__row-2 ${`item__${index + 1}`}`
            }>
              <Link to={post.path}>
                <h3>{post.title}</h3>
                <img src={post.image} alt={post.title} />
                <h6>{post.description}</h6>
              </Link>
            </li>
          ))
        }
        {postsLoading && <Loader />}
        {postsError && <h1>{postsError}</h1>}
      </ul>
    </div>
  )
}

export default Mosaic
