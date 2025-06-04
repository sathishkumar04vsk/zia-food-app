import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo.jsx'
import AddColor from './AddColor.jsx'
import Navbar from './components/Navbar.jsx'
import { Toolbar } from '@mui/material'
import Footer from './components/Footer.jsx'
import FoodList from './components/FoodList.jsx';
import { Route, Routes } from 'react-router-dom'
import { AddFood } from './components/AddFood.jsx'


export const APPContext = createContext(null);


const data = [
        {
            id:1,
            restorant_name:"Pizza Hut",
            food_image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/f6d8a22a-fd9d-48f5-89fd-44e29bb1b6b1_770772.jpg",
            rating:4.1,
            expected_delivery: "30-40 mins",
            food_name:"spicy pizza",
            location:"Kalayan Nagar,Bengaluru"
        },
        {
            id:2,
            restorant_name:"Pizza Hut",
            food_image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/f6d8a22a-fd9d-48f5-89fd-44e29bb1b6b1_770772.jpg",
            rating:4.1,
            expected_delivery: "30-40 mins",
            food_name:"spicy pizza",
            location:"Kalayan Nagar,Bengaluru"
        },
        {
            id:3,
            restorant_name:"Pizza Hut",
            food_image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/f6d8a22a-fd9d-48f5-89fd-44e29bb1b6b1_770772.jpg",
            rating:4.1,
            expected_delivery: "30-40 mins",
            food_name:"spicy pizza",
            location:"Kalayan Nagar,Bengaluru"
        },
        {
            id:4,
            restorant_name:"Pizza Hut",
            food_image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/f6d8a22a-fd9d-48f5-89fd-44e29bb1b6b1_770772.jpg",
            rating:4.1,
            expected_delivery: "30-40 mins",
            food_name:"spicy pizza",
            location:"Kalayan Nagar,Bengaluru"
        },
        {
            id:5,
            restorant_name:"Pizza Hut",
            food_image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/f6d8a22a-fd9d-48f5-89fd-44e29bb1b6b1_770772.jpg",
            rating:4.1,
            expected_delivery: "30-40 mins",
            food_name:"spicy pizza",
            location:"Kalayan Nagar,Bengaluru"
        }
    ]
function App() {
 const [FoodDatas,setFoodDatas] =useState(data);

  return (
    <APPContext.Provider value={{FoodDatas, setFoodDatas}} >
      <Navbar  />
      <div className="container mt-24 mb-12 mx-auto">
      <Routes>
            <Route index Component={FoodList} />
            <Route path='create' Component={AddFood} />
      </Routes>
      </div>
      <Footer />
    </APPContext.Provider>

  )
}

export default App

//  APP => FooList => FoodCard

// app => child1, child.... infitie


// 1. Creating context
// export const contextname = createContext(intitialValue)


// 2. wraping context to parent or main component
// <contextname.provider value={{}}>
// child
// </contextname.provider>


// 3.usage for useContext

// const context = useContext(contextname)