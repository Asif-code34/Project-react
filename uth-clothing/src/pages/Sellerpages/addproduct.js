    {/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

 const Addproduct = () => {
    const [isForm,setIsForm]=useState({
        ProductSku: "",
        ProductName: "",
        ProductPrice: 0,
        ProductShortName: "",
        ProductDescription: "",
        CreatedDate: new Date(),
        DeliveryTimeSpan: "",
        CategoryId: 0,
        ProductImageUrl: "",
        productTypes: [],
    })
    useEffect(()=>{
        const callApi=async()=>{
            let res =await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllCategory")
           console.log(res.data.data);
        setIsForm({...isForm,productTypes:res.data.data})
        }
        callApi()
    },[])
    const onChangeHandler=(fieldName,e)=>{
        setIsForm({...isForm,[fieldName]:e.target.value})
    }
 const SubmitHandler=async(e)=>{
    e.preventDefault()
     let obj={
        "ProductId": 0,
        "ProductSku": ProductSku,
        "ProductName": ProductName,
        "ProductPrice": ProductPrice,
        "ProductShortName":ProductShortName,
        "ProductDescription":   ProductDescription,
        "CreatedDate": CreatedDate,
        "DeliveryTimeSpan": DeliveryTimeSpan,
        "CategoryId": CategoryId,
        "ProductImageUrl":  ProductImageUrl,
     }
     let res2=await axios.post("https://onlinetestapi.gerasim.in/api/Ecomm/CreateProduct",obj)
    console.log(res2.data.data)     

}      
    return (  
        
       <div className='offset-3 col-6'>
        <form onSubmit={(e)=>SubmitHandler(e)}>
            <div className="form-group my-3">
                <label htmlFor="exampleInputEmail1" className="form-label"> ProductSku</label>
                <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => onChangeHandler(" ProductSku", e)}></input>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">ProductName</label>
                <input type="Number" className="form-control" id="exampleInputPassword1"onChange={(e) => onChangeHandler("ProductName", e)}></input>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Productprice</label>
                <input type="Number" className="form-control" id="exampleInputPassword1"onChange={(e) => onChangeHandler("ProductPrice", e)}></input>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">ProductShortName</label>
                <input type="Number" className="form-control" id="exampleInputPassword1"onChange={(e) => onChangeHandler(" ProductShortName", e)}></input>
            </div>
            <div className="form-group mb-3">
                <label htmFor="exampleInputPassword1" className="form-label">Product Description</label>
                <input type="text" className="form-control" id="exampleInputPassword1"onChange={(e) => onChangeHandler("ProductDescription", e)}></input>
                </div>
               
                <div className="form-group mb-3">
                <label htmFor="exampleInputPassword1" className="form-label">Delivery Time Span</label>
                <input type="text" className="form-control" id="exampleInputPassword1"onChange={(e) => onChangeHandler(" DeliveryTimeSpan", e)}></input>
                </div>
               
                <div className="form-group mb-3">
                <label htmFor="exampleInputPassword1" className="form-label">Product category</label>
                <select type="text" className="form-control" id="exampleInputPassword1"onChange={(e) => onChangeHandler(" CategoryId", e)}>
               {/* productTypes.map((item)=>{
                    return(
                        <option value={item.CategoryId}>{item.CategoryName}</option>
                    )
                })  *
                   
                </select>
                </div>
                <div className="form-group mb-3">
                <label htmFor="exampleInputPassword1" className="form-label">ProductImageUrl</label>
                <input type="text" className="form-control" id="exampleInputPassword1"onChange={(e) => onChangeHandler("ProductImageUrl", e)}></input>
                </div>
                <button type='submit' className='btn btn-primary'></button>

                </form>       
            </div>
        
    
    );
};          



export default Addproduct;     */}