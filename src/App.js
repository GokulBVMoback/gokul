import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './component/About'
import Base from './component/Base'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/gokul' element={<Base />} />
        <Route path='about' element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App