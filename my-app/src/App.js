import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Footer from './components/Footer'
import Home from './components/Home'
import Signup from './components/Signup'
import Blog from './components/Blog'
import Todo from './components/Todo'
import New from './components/New'
import ProductPage from './pages/ProductPage'
import Start from './components/Start'
import Help from './components/Help'
import TrendingPage from './pages/TrendingPage'
function App() {

  return (
    <div>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/help' element={<Help/>}/>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={ <Signup />} />
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/blog' element={<Blog />} />
        <Route path='/productpage/:description' element={<ProductPage />} />
        <Route path='/trendingpage/:title' element={<TrendingPage/>}/>
        <Route path='/start' element={<Start/>}/>
      </Routes>
     <Footer />
    </div>
  )
}

export default App