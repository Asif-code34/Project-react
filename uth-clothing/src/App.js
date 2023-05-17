import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './pages/Navbar/navbar';
import Addproduct from './pages/Sellerpages/addproduct';
import Allproduct from './pages/Sellerpages/allproduct';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
      <Route path='/'element={<Login/>}></Route>
      <Route path='/addproduct'element={<Addproduct/>}></Route>
      <Route path='/allproduct'element={<Allproduct/>}></Route>
      
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
