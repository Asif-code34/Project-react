import React, { useEffect,useState,} from 'react';
import axios from 'axios';
import Cart from '../cart/Addtocart';

const Tablet = () => {
    const [tablet,setTablet]=useState([]);
  //  const { increaseCart } = useContext(AppContext)
  const [isAdmin, setIsadmin] = useState(false);

    useEffect(()=>{
        const TabletApi = async()=>{
            let res4 =await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=4")
           console.log(res4.data.data)
           setTablet(res4.data.data)
        }
        TabletApi ()
        let ls=localStorage.getItem("isAdmin");
        if(ls){
            setIsadmin(true)
        }
    },[])
 { /* const cartHandler=()=>{
        increaseCart ()
 */ 
   }
    return (
        <div className='container'>
            <div className='row'>
                {
                    tablet.map((item)=>
                    {
                        return(
                            <div className='col-4'>
  <div className="card" style={{"width": "18rem"}}>
  <img src={item.productImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body"> 
    <h5 className="card-title">{item.productName}</h5>
    <p className="card-text">{item.productDescription}</p>
   {/*<a href="#" className="btn btn-primary">AddtoCart</a> */}
{ /*  <button className='btn btn-primary'onClick={() => cartHandler()}>AddtoCart</button>*/}
      <Cart/>
      {isAdmin &&  <button className='btn btn-danger'>Delete</button> }
  </div>
</div>
</div>
                        )
                    })
                }

            </div>
            
        </div>
    );
};

export default Tablet;