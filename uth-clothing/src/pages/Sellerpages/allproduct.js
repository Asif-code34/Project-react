import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Allproduct = () => {
    const[getProduct,SetgetProduct] = useState([]);

    useEffect(() => {
        const productApi = async()=>{
            let res = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts")
            let ls = localStorage.getItem("isAdmin");
            SetgetProduct(res.data.data)
            console.log(res)

        }
        productApi()
    },[])


    return (
        <div className='container'>
            <div className='row'>
                { getProduct.map((item) => {
                    return ( 
                        <div className='col-4'>
                            <div class="card"  style={{ width: "18rem" }}>
                                <img src={item.productImageUrl} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">{item.productName}</h5>
                                        <p class="card-text">{item.productDescription}</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    );
};

export default Allproduct;