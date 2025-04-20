import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookShelf from './pages/BookShelf'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <>
<NavBar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='shelf' element ={<BookShelf/>}/>
  </Routes>
   
    </>
  )
}

export default App
