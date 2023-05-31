import React, { useEffect, useState,} from 'react';
import axios from 'axios';
import Cart from '../cart/Addtocart';

const Laptop = () => {
    const [islaptop, setIsLaptop] = useState([]);
    const [isAdmin, setIsadmin] = useState(false);
   // const { increaseCart } = useContext(AppContext)
    useEffect(() => {     // it should return function or nothing.


        const callApihere = async () => {   // we have declared function because useeffect do not except callback function to retuen prommise. 
            let res = await axios.get('http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=2')
            console.log(res.data.data);
            setIsLaptop(res.data.data);
        }
        callApihere();
        let ls=localStorage.getItem("isAdmin");
        if(ls){
            setIsadmin(true)
        }
    }, [])
   {/* const cartHandler=()=>{
        increaseCart()

    }*/}
    return (
        <div className='container'>
            <div className='row'>
                {islaptop.map((item) => {
                    return (
                        <div className='col-4'>
                            <div className="card mt-5" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={item.productImageUrl} alt="Laptop" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text">{item.productDescription}</p>
                                   {/* <button className='btn btn-primary' onClick={() => cartHandler()}>AddtoCart</button>*/}
                                   <Cart/>
                                   {isAdmin &&   <button className='btn btn-danger'>Delete</button>}
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    );
};

export default Laptop;