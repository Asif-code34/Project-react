import React, { useContext } from 'react';
import { AppContext } from '../../App';

const Cart = (props) => {
    const{increaseCart,cartArray}=useContext(AppContext)
    const cartHandler = () => {
        increaseCart(props.itemdetail)
      //  console.log(props.itemdetail )
    } 
    return (
        <div>
             <button className='btn btn-primary' onClick={() => cartHandler()}>AddtoCart</button>
             <div className='container'>
                <div className='row'>
                {cartArray.map((item)=>{
                return(
                    <div className='col-3'>
                         <div className="card" style={{width: "18rem"}}>
  <img src={item.productImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body"> 
    <h5 className="card-title">ProductName{item.productName}</h5>
    <p className="card-text">Qty{item.Qty}</p>
    <p className="card-text">price{item.productPrice}</p>
                        
            </div>     </div>   </div>
                  
                  
                )
            })}
                </div>
             </div>
          
        </div>

    );
};

export default Cart;