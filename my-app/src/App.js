import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Footer from './components/Footer'
import Home from './components/Home'
import Signup from './components/Signup'
import Blog from './components/Blog'
import New from './components/New'
import ProductPage from './pages/ProductPage'


function App() {

  return (
    <div>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/new' element={<New/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/productpage/:slug' element={<ProductPage/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App