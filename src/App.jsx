import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo.jsx'
import AddColor from './AddColor.jsx'
import Navbar from './components/Navbar.jsx'
import { Toolbar } from '@mui/material'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App
