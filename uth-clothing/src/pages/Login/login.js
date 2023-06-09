import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [isLogin, setisLogin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const[isAdmin,setIsadmin] =useState(false)
  const  navigate =useNavigate()
  useEffect(() => {
    let ls = localStorage.getItem("isLogin");
    if(ls){
      navigate("/dashboard")
    }
  
  },[])
  
  const UserHandle = (fieldname, e) => {
    setUsername(e.target.value)
  }
  const PasswordHandle = (fieldname, e) => {
    setPassword(e.target.value)
  }


  const submitHandler =async (e) => {
    e.preventDefault();
    if (Username === "admin" && Password === "123") {
      //setisLogin(true)
      localStorage.setItem("isLogin", true);
       localStorage.setItem("isAdmin",true);
       navigate('/addproduct')
      window.location.reload();//we reload our page here so that logout button will show after login


    }
    else {

      let obj ={
        "UserName": Username,
        "UserPassword":Password
      }
      let res =await axios.post("https://onlinetestapi.gerasim.in/api/Ecomm/Login",obj);
      console.log(res.data.message)
      
      if(res.data.message==="Login Successful"){
        localStorage.setItem("isLogin",true);
        localStorage.setItem("isUser",true);
        localStorage.setitem("userObj",res.data.data);
      }
       navigate("/dashboard")
       window.location.reload()
  
  {/* else if(Username === "asif" && Password === "321") {
     // setisLogin(true)
     localStorage.setItem("isLogin", true);
      localStorage.setItem("isUser", true);
      navigate('/dashboard')
        window.location.reload();
    }
    else{
      alert("please check credentials")
    }   */}
    

    };
  }
  return (
    <div className='col-6 offset-3'>
     {/* {(isLogin && <Navigate to={"/addproduct"} replace={true}></Navigate>) ||
      (isUser && <Navigate to={"/dashboard"} replace={true}></Navigate>)*/}
      <form onSubmit={(e) => submitHandler(e)}>
        <div class="mb-3">
          
          <label htmlFor="exampleInputUsername" className="form-label"> Username</label>
          <input type="text" className="form-control" id="exampleInputEmail1" value= {Username} placeholder='username' onChange={(e) => UserHandle("Username", e)} />

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"value={Password} placeholder='password' onChange={(e) => PasswordHandle("Password", e)} />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>

    </div>
  );
};

export default Login;