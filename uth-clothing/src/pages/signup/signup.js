import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [Username, setUsername] = useState("");
  const [MobileNo, setMobile] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const SignupHandler = async (e) => {
    e.preventDefault();

    let obj = {
      "Name": Username,
      "MobileNo": MobileNo,
      "Password": Password,
    }
    let res = await axios.post("https://onlinetestapi.gerasim.in/api/Ecomm/RegisterCustomer", obj)
    console.log(res.data.message)
    if (res.data.message === "Customer Added Successfully") {
      navigate('/dashboard')
    }
  }
  return (
    <div className='col-6 offset-3'>

      <form onSubmit={(e) => SignupHandler(e)}>
        <div class="mb-3">

          <label htmlFor="exampleInputUsername" className="form-label"> Username</label>
          <input type="text" className="form-control" id="exampleInputEmail1" value={Username} placeholder='username' onChange={(e) => setUsername(e.target.value)} />

        </div>
        <div class="mb-3">

          <label htmlFor="exampleInputmobile" className="form-label"> MobileNo.</label>
          <input type="Number" className="form-control" id="exampleInputEmail1" value={MobileNo} placeholder='Mobileno.' onChange={(e) => setMobile(e.target.value)} />

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={Password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Signup</button>
      </form>


    </div>
  );
};

export default Signup;