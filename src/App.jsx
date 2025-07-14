import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo.jsx";
import AddColor from "./AddColor.jsx";
import Navbar from "./components/Navbar.jsx";
import { Alert, Box, createTheme, Paper, Snackbar, ThemeProvider, Toolbar } from "@mui/material";
import Footer from "./components/Footer.jsx";
import FoodList from "./components/FoodList.jsx";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { AddFood } from "./components/AddFood.jsx";
import UpdateFood from "./components/UpdateFood.jsx";
import CounterComponent from "./components/Counter.jsx";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

// count state
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// count state functions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

const foodListSlice = createSlice({
  name: "foodlist",
  initialState: { value: null },
  reducers: {
    updateFood: (state, action) => {
      state = action.payload;
    },
  },
});

export const { updateFood } = foodListSlice.actions;

// redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    foodlist: foodListSlice.reducer,
  },
});

export const APPContext = createContext(null);

function App() {
  const [FoodDatas, setFoodDatas] = useState([]);
  const [alertMesssage,setAlertMessage] = useState({open: false, severity:"success", message:""});
  const [mode, setMode] = useState("light");

  // localStoage.setItem('key', value)
  // localStoage.getItem('key')


  const [token, setToken] = useState(localStorage.getItem('auth-token'));

  const handleSetToken = (token) =>{
    setToken(token);
    localStorage.setItem('auth-token',token)
  }

 
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#1FC8B9",
        dark: "14A996",
      },
    },
  });

  const handleClose = () =>{
    setAlertMessage(prev=>({...prev, open:false}))
  }

  const { open, severity, message } = alertMesssage;

  useLayoutEffect(()=>{
    setTimeout(()=>handleClose(), 6000)
  }, [open])


  

  return (
    <Provider store={store}>
      <APPContext.Provider value={{ FoodDatas, setFoodDatas, mode, setMode, token, handleSetToken, setAlertMessage }}>
        <ThemeProvider theme={theme}>
          <Snackbar
              anchorOrigin={{vertical:"top", horizontal:"right"}}
              open = {open}
              onClose={handleClose}
              
           >
            <Alert variant="filled" severity={severity} onClose={handleClose} >{message}</Alert>
           </Snackbar>
          <Routes>
            <Route path="/" element={<Layout />} >
                  <Route index element={<FoodList />} />
                  <Route path="create" element={<AddFood />} />
                  <Route path="edit/:id" element={<UpdateFood />} />
                  <Route path="my-todo" element={<Todo />} />
                  <Route path="count" element={<CounterComponent />} />
            </Route>

            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={Signup} />
          </Routes>
        </ThemeProvider>
      </APPContext.Provider>
    </Provider>
  );
}

const Layout = () =>{
  const { token } = useContext(APPContext);

  if (!token){
   return  <Navigate to='/login' replace />
  }



  return( <Paper>
                <Navbar />
                <div className="container pt-24 pb-12 mx-auto">
                  <Outlet />
                </div>
                <Footer />
              </Paper>)
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
