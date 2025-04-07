import { useState,useEffect } from "react";
import axios from 'axios';

const Body = () => {
    // const {state, dispatch } = useCart();

    const [products,setProducts] = useState([])
    const [loader , setLoader ] = useState(false)
    const [search, setSearch] = useState("")
    const [filterData, setFilterData] = useState([])

    const filteredData = () => {
        console.log("filter",search)
        const filteredSearch = products.filter((product) => (
            product?.title?.toLowerCase()?.includes?.(search?.toLowerCase())
        ));
        setFilterData(filteredSearch)
    }

    const changeSearchHandler = (e) => setSearch(e.target.value)

    useEffect(() =>{
        setLoader(true)
        axios.get('/api/products')
        .then(res => {
        setLoader(false)
        setProducts(res.data.products)
        setFilterData(res.data.products)
        console.log(res.data.products)
        })  
        .catch((err) => {
        console.log(err)
        })

    }, [])

    return <>
            <div className="search-container">
                <input 
                type="text"
                value={search}
                onChange={changeSearchHandler}
                className="search-bar"
                placeholder="Still deciding? Search products here... 🔎"
                ></input>
                <button className="button-44" role="button" onClick={filteredData}>Search</button>
                </div>
                {loader && <div>loading...</div>}
                <div className="card">               
                {filterData && filterData.map(
                ({
                id,
                title,
                image,
                price,
                starRating,
                ratings,
                company,
        }) => (

                 <div className="card-container product-card">
                 <div key={id} className="product-image"> 
                      <img src={image} alt={title} />
                  </div>
                    <h3 className="product-title"> {title} </h3 >
                 <div className="card-details">
                    <h4 className="brand">Brand :{company}</h4>
                    <p className="current-price">₹ {price}</p>
                    <p className="rating  fa fa-star " style={{color:'yellow'}}>
                        <span class="rating-count" >{starRating}</span>
                    </p>
                  </div>
                 
                    <div>
                    <button className="button-56" onClick={()=> dispatch({type:"ADD_TO_CART", payload:{price,id,name,image}})}>ADD TO CART</button>

                    <button className="button-32 wish" onClick={()=> andFunctionSetWishlist({type:"ADD_TO_WISHLIST", payload:{id}})}> <i class="fa fa-heart" aria-hidden="true"></i>
                    </button>
                    </div>
                 </div>

             )
              )}
          </div>

         </>
}


export default Body;