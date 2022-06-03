import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/:userId' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<h1>NotFound</h1>} />
    </Routes>
  )
}

export { App }
