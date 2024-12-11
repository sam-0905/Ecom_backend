import { useState,useEffect } from "react";
import axios from 'axios';

const Body = () =>{

    const [products,setProducts] = useState([])
    const [loader , setLoader ] = useState(false)


    useEffect(() =>{
        setLoader(true)
        axios.get('/api/products')
        .then(res => {
        setLoader(false)
        setProducts(res.data.products)
        console.log(res.data.products)
        })  
        .catch((err) => {
        console.log(err)
        })

    }, [])

    return <>
            <div>
                {loader && <div>loading...</div>}
                {products && products.map(
                ({
                id,
                title,
                image,
                price,
                starRating,
                ratings,
                company,
        }) => (
             <div className="card">

                <div className="card-container">

                 <div key={id} className="product-image"> 
                    <img src={image} width="100%" height="auto" alt={title} /> </div>
                    <h3 className="product-title"> {title} </h3>
                    <div className="card-details">
                    {/* <div>Brand :{company}</div> */}
                    <div className="price-container">₹ {price}</div>
                    <div className="rating fa fa-star" style={{marginTop:"4px"}}>
                        <div className="rating-stars">{ratings}</div>
                        <span class="rating-count">{starRating}</span>
                    </div>
                     {/* {fastDelivery ? (
                     <div >  Fast Delivery </div>
                     ) : (
                     <div> 3 days minimum </div>
                     )} */}
                    </div>

                 <div>
                    {/* {state.quantity > 0 && (
                   <span className="cart-counter"> {state.quantity}</span>
                    )}
                     */}
                    <button className="button-54" onClick={()=> dispatch({type:"ADD_TO_CART", payload:{price,id,name,image}})}>ADD TO CART</button>
                    <button className="button-32 wish-btn" onClick={()=> andFunctionSetWishlist({type:"ADD_TO_WISHLIST", payload:{id}})}> <i class="fa fa-heart" aria-hidden="true"></i>
                 </button>
                 </div>
              </div>
                   
             </div>                       
             )
              )}
          </div>
         </>
}

export default Body;