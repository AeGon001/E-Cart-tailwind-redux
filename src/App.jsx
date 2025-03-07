
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Pnf from './pages/Pnf'
import Cart from './pages/Cart'
import  Footer from './components/Footer'




function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/wishlist' element={<Wishlist/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/:id/view' element={<View/>} />
    <Route path='/' element={<Pnf/>} />
  </Routes>
  <Footer/>
    </>
  )
}

export default App
