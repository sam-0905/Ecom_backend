import { useState,useEffect } from "react";
import axios from 'axios';
import { products } from './backend/db/products';

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
                inStock,
                level,
                fastDelivery,
                 ratings,
        }) => (
             <div className="product-card">

                <div className="card-container">

                 <div key={id} className="product-image"> 
                    <img src={image} width="100%" height="auto" alt={title} /> </div>
                
                    <div className="card-details">
                    <h3 className="product-title"> {title} </h3>
                    <div className="price-container">₹ {price}</div>
                    <div className="stock-label">  {inStock && <div className="in-stock"> In Stock </div>}
                    {!inStock && <div className="out-stock">  Out of Stock </div>}</div>
                    <div>{level}</div>
                    <div className="rating fa fa-star" style={{marginTop:"4px"}}>
                        <div className=".rating-stars">{ratings}</div>
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
                 </div>

                 <button className="button-32 wish-btn" onClick={()=> andFunctionSetWishlist({type:"ADD_TO_WISHLIST", payload:{id}})}> <i class="fa fa-heart" aria-hidden="true"></i>
                 </button>
              </div>
                   
             </div>                       
             )
              )}
            </div>
         </>
}

export default Body;