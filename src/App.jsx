import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo.jsx";
import AddColor from "./AddColor.jsx";
import Navbar from "./components/Navbar.jsx";
import { Toolbar } from "@mui/material";
import Footer from "./components/Footer.jsx";
import FoodList from "./components/FoodList.jsx";
import { Route, Routes } from "react-router-dom";
import { AddFood } from "./components/AddFood.jsx";
import UpdateFood from "./components/UpdateFood.jsx";

export const APPContext = createContext(null);


function App() {
  const [FoodDatas, setFoodDatas] = useState([]);

  

  return (
    <APPContext.Provider value={{ FoodDatas, setFoodDatas }}>
      <Navbar />
      <div className="container mt-24 mb-12 mx-auto">
        <Routes>
          <Route index Component={FoodList} />
          <Route path="create" Component={AddFood} />
          <Route path="edit/:id" Component={UpdateFood} />
        </Routes>
      </div>
      <Footer />
    </APPContext.Provider>
  );
}

export default App;

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
