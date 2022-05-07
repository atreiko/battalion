import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components';
import {
  Home, 
  Page404,
  Photos,
  Soldier,
  Soldiers,
  Valors,
  Videos
} from './pages';

import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}> 
        <Route path='/' element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path='soldiers' element={<Soldiers />} />
          {/* <Route path='soldiers/:id' element={<Soldier />} /> */}
          <Route path='valors' element={<Valors />} />
          <Route path='photos' element={<Photos />} />
          {/* <Route path='videos' element={<Videos />} /> */}
          {/* <Route path='*' element={<Page404 />} />  */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
