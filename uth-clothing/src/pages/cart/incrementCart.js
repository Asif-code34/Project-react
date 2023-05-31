import React,{ useContext, useState} from 'react';
import Cart from './Addtocart';
import { AppContext } from '../../App';


const IncrementCart = (props) => {
    const [cartQty, setCartQty] = useState(0);
   const{qty}=useContext(AppContext)

    const increaseQty = () => {
       setCartQty(cartQty + 1)
       qty(cartQty + 1)
    //  setCartValue(cartValue + 1)
    }
    const decreaseQty = () => {
        setCartQty(cartQty - 1) 
        qty(cartQty - 1)
    }
    return (
        <div>
                     {cartQty>=1 &&<Cart itemdetail={props.itemdetail}/>}
              <div class="btn-group" style={{ marginTop: "2px" }} role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary" onClick={() => decreaseQty()}>-</button>
                                        <button type="button" class="btn btn-primary">Qty{cartQty}</button>
                                        <button type="button" class="btn btn-primary" onClick={() => increaseQty()}>+</button>
                                    </div>
                                    </div>

    );
};

export default IncrementCart;