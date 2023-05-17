import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [isLogin, setisLogin] = useState(false)

  useEffect(()=>{
    let ls = localStorage.getItem("isLogin")
    if(ls){
      setisLogin(true)
   }
  })
const UserHandle=(fieldname,e)=>{
  setUsername(e.target.value)
}
const PasswordHandle=(fieldname,e)=>{
  setPassword(e.target.value)
}
 const submitHandler=(e)=>{
  e.preventDefault();
  if(Username==="admin"&& Password==="123"){
    setisLogin(true)
    localStorage.setItem("isLogin",true)
    window.location.reload()
  }
else{
  alert("please check credential")
}
}

  return (
    <div className='col-6 offset-3'>
      {isLogin && <Navigate to={"/allproduct"} replace={true}></Navigate>}
      <form onSubmit={(e)=>submitHandler(e)}>
        <div class="mb-3">
          <label for="exampleInputEmail1" className="form-label">Username</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>UserHandle("Username",e)} />

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>PasswordHandle("Password",e)} />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>

    </div>
  );
};

export default Login;