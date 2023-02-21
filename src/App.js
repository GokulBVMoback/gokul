import React from 'react'
import Header from './component/Header'
import Home from './component/Home'
import Skills from './component/Skills'
import Education from './component/Education'
import Experience from './component/Experience'
import Contact from './component/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './component/About'
import Base from './component/Base'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base />} />
        <Route path='about' element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App