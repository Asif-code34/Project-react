import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser,} from '@fortawesome/free-solid-svg-icons'
import './navbar.css';
import Modal from '../modal/modal';
import { AppContext } from '../../App';
const Navbar = () => {
  const { cartValue,cartArray, showmodalpop,showmodalogin} = useContext(AppContext)
  const [isLogin, setisLogin] = useState(false);

  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsadmin] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()




  useEffect(() => {
    let ls = localStorage.getItem("isLogin");
    let ls2 = localStorage.getItem("isUser");
    let ls3 = localStorage.getItem("isAdmin")
    if (ls) {
      setisLogin(true)
    }
    if (ls2) {
      setIsUser(true)
    }
    if (ls3) {
      setIsadmin(true)
    }
  }, [])

  const logout = () => {
    localStorage.clear();
    navigate('/dashboard')
    window.location.reload()
  }
  const login = () => {
    showmodalogin()

    // navigate('/')
    // setshowModal(true)

  }
  //const modalLogin=()=>{
  //  navigate('/')
  //}
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "purple" }}>
        {showmodalpop && <Modal></Modal>}
        <a className="navbar-brand" href="#" id='logo'> <span id='span1'>E</span>lectro <span>World</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <a className="nav-link active" aria-current="page" href="/addproduct">Addproduct</a>*/}
            {isAdmin && <Link to="/addproduct" className="nav-link active" style={{ color: "white" }}>Addproduct</Link>}
            {isLogin && <Link to="/allproduct" className="nav-link active" style={{ color: "white" }}>Allproduct</Link>}
            {/*} <a className="nav-link active" aria-current="page" href="/allproduct">Allproduct</a>*/}
            <Link to="/" className="nav-link active" style={{ color: "white" }}>Dashboard</Link>
            {isUser && <>  <Link to='/mobile' className="nav-link active" style={{ color: "white" }}>Mobile</Link>
              <Link to="/tablet" className="nav-link active" style={{ color: "white" }}>Tablet</Link>
              <Link to="/laptop" className="nav-link active" style={{ color: "white" }}>Laptop</Link>
              <Link to="/cart" className="nav-link active" style={{ color: "white" }}>Cart{""}<sup>{cartArray.length}</sup></Link> </>}

          </div>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {isLogin && <p className="nav-link active" style={{ color: "white" }} onClick={() => logout()} ><FontAwesomeIcon icon={faRightFromBracket} />Logout</p>}
            {/*!isLogin  && <p className="nav-link active"style={{color:"white"}} onClick={()=>loginHandler()} > <FontAwesomeIcon icon ={faUser}/>Login</p> */}
          {!isLogin  && <p className='nav-link'style={{ color: "white" }} onClick={() => login()}> <FontAwesomeIcon icon={faUser} /> Login</p>}
            {!isLogin && <Link to='/signup' className='nav-link active' style={{ color: "white" }}
            ><FontAwesomeIcon icon={faUser} />SignUp</Link>}

          </div>

        </div>

      </nav>
      {/*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*/}
    </div>

  );
};

export default Navbar;