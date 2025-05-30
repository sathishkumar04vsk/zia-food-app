import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo.jsx'
import AddColor from './AddColor.jsx'
import Navbar from './components/Navbar.jsx'
import { Toolbar } from '@mui/material'
import Footer from './components/Footer.jsx'
import FoodList from './components/FoodList.jsx';


function App() {
 const [name,setName] =useState("Beast Food");
 console.log(name)
  return (
    <>
      <Navbar name={name} />
      <FoodList name={name} setName={setName} />
      <Footer  name={name} />
    </>
  )
}

export default App
