import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const[isLogin,setisLogin]= useState(false)
useEffect(()=>{
let ls = localStorage.getItem("isLogin")
if(ls){
  setisLogin(true)
}
},[])
const Logout=()=>{
  localStorage.clear();
  window.location.reload()
}
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Uth-Clothing</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
     {/* <a className="nav-link active" aria-current="page" href="/addproduct">Addproduct</a>*/}
     <Link to="/addproduct"className="nav-link active">Addproduct</Link>
       {/*} <a className="nav-link active" aria-current="page" href="/allproduct">Allproduct</a>*/}
       <Link to="/allproduct"className="nav-link active">Allproduct</Link> 
       
        
      </div>
    </div>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
    {isLogin && <p className="nav-link active" onClick={()=>Logout()} href="#">Logout</p> }
    {!isLogin && <p className="nav-link active"  href="#">Login</p> }
        
      </div>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Navbar;