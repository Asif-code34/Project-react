import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Cart from '../cart/Addtocart';
import IncrementCart from '../cart/incrementCart';
//import Modal from '../modal/modal';
const Mobile = () => {
    const [getMobile, setMobiledata] = useState([]);
    // const { increaseCart } = useContext(AppContext);
    // const[showModal,setShowModal]=useState(false)
    const [isAdmin, setIsadmin] = useState(false);
    

    useEffect(() => {


        const mobilepi = async () => {

            let res = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=1");

            console.log(res.data.data);
            setMobiledata(res.data.data);
        }
        mobilepi();
        let ls = localStorage.getItem("isAdmin");
        if (ls) {
            setIsadmin(true)
        }
    }, [])
    // const cartHandler = () => {
    //    increaseCart()
    // }
   {/*} const increaseQty = () => {
        setCartQty(cartQty + 1)
    }
    const decreaseQty = () => {
        setCartQty(cartQty - 1)
    */ }

    return (
        <div className='container'>
            <div className="row">
                {getMobile && getMobile.length > 0 && getMobile.map((item) => {
                    return (
                        <div className='col-4'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={item.productImageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text">{item.productDescription}</p>
                                   
                                    {/*cartQty >= 2 && <Cart />}
                                    <div class="btn-group" style={{ marginTop: "2px" }} role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary" onClick={() => decreaseQty()}>-</button>
                                        <button type="button" class="btn btn-primary">Qty{cartQty}</button>
                                        <button type="button" class="btn btn-primary" onClick={() => increaseQty()}>+</button>
                    </div>    */   }      
                                          <IncrementCart itemdetail={item}/>  
                   
                                    {isAdmin && <button className='btn btn-danger'>Delete</button>}
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            /{/*  <Modal message="Are u sure u want to delete" closeModal={()=>closeModal()}/>*/}
        </div>
    );
};

export default Mobile;