import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './pages/Navbar/navbar';
import Addproduct from './pages/Sellerpages/addproduct';
import Allproduct from './pages/Sellerpages/allproduct';
import Mobile from './pages/Product/Mobile';
import Tablet from './pages/Product/tablet';
import Laptop from './pages/Product/laptop';
import Cart from './pages/cart/Addtocart';
import Dashboard from './pages/Dashboard/dashboard';
import Protected from './pages/Protected/protected';
import Component, { createContext, useState } from 'react';
import Aboutus from './pages/Dashboard/aboutus';

import Signup from './pages/signup/signup';

const AppContext = createContext()

function App() {
  const [cartValue, setCartvalue] = useState(0)
  const [showmodalpop, setShowmodalpop] = useState(false)
  const [cartArray,setCartArray]=useState([])

  const increaseCart = (product) => {
  // setCartvalue(cartValue + 1)
   console.log(product)
   let currentProduct={...product,Qty:(cartValue+1)};
   console.log(currentProduct)
   setCartvalue(0);
   setCartArray([...cartArray,currentProduct])
  }
  const showmodalogin = () => {
    setShowmodalpop(
      !showmodalpop
    )
  }



  return (
    <div>
      <AppContext.Provider value={{ cartValue, increaseCart,cartArray, showmodalpop, showmodalogin }}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            {/*  <Route path='/'element={<Login/>}></Route> */}
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/aboutus' element={<Aboutus/>}></Route>
             <Route path='/addproduct' element={<Protected Component={<Addproduct />} />}></Route>
            <Route path='/allproduct' element={<Protected Component={<Allproduct />} />}></Route>
            <Route path='/mobile' element={<Protected Component={<Mobile />} />}></Route>
            <Route path='/tablet' element={<Protected Component={<Tablet />} />}></Route>
            <Route path='/laptop' element={<Protected Component={<Laptop />} />}></Route>
            <Route path='/cart' element={<Protected Component={<Cart />} />}></Route>
          </Routes>

        </BrowserRouter>
      </AppContext.Provider>



    </div>
  );

}
export default App;
export { AppContext };
