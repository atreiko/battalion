import React from 'react'
import Mosaic from '../components/mosaic/Mosaic'
import { About, Media } from '../containers'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Mosaic />
      <About />
      <Media />
    </motion.main>
  )
}

export default Home