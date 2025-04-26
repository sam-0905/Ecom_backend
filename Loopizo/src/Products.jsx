    import { useState,useEffect } from "react";
    import axios from 'axios';
    import Filters from "./Pages/Filters";
    import { useCart } from "./Context/Cart-context";
    import { useWish } from "./Context/Wish-context";
    import { Link, useParams } from "react-router";
    import info from "./assets/Icon/Info.png"
    import Alert from "./components/Alert";


    const Products = () => {

    const [products,setProducts] = useState([])
    const [loader , setLoader ] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredData, setfilteredData] = useState([])
    const { productId } = useParams();

    const[sort,setSort] = useState("");
    const[inStockOnly , setInStockOnly] = useState(false);
    const[deliverable,setDeliverable] = useState(false);
    const[minRating , setMinRating] = useState(0);
    const[maxPrice,setMaxPrice] = useState(130000)

    const {state,dispatch} = useCart();

    const {state: { wishlist },AddToWish,} = useWish();

    const [alert,setAlert] = useState(null);

    const showAlert = (message,type) => {
        setAlert({message,type})
    }

    const onSearchInputHandler = (e) => setSearchTerm(e.target.value)

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

    useEffect(() => {

        const filteredProducts = products
        .filter(product =>(inStockOnly ? product.inStock:true))
        .filter(product => deliverable ? product.deliverable: true)
        .filter(product => product.starRating >= minRating)
        .filter(product => product.price <= maxPrice) 
        .filter((product) => (product?.title?.toLowerCase()?.includes?.(searchTerm?.toLowerCase()))) 
        .sort((a,b)=> {
        if(sort === "lowToHigh") return a.price - b.price;
        if(sort === "highToLow") return b.price - a.price;
        return 0;
        });
        setfilteredData(filteredProducts)

        },[products, sort, inStockOnly, deliverable, minRating, maxPrice, searchTerm]);

    return (
    <>
        <div className="main-content">
            
            <Filters 
                sort={sort}
                setSort={setSort}
                inStockOnly={inStockOnly}
                setInStockOnly={setInStockOnly}
                deliverable={deliverable}
                setDeliverable={setDeliverable}
                minRating={minRating}
                setMinRating={setMinRating}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
            />
                
            <div className="right-section">
                <div className="search-container">
                    <input type="text" value={searchTerm} onChange={onSearchInputHandler} className="search-bar"
                        placeholder="Still deciding? Search products here... 🔎"></input>
                    <button className="button-44" role="button" onClick={()=>{setSearchTerm(searchTerm)}}>Search</button>
                </div>
                {loader && <div className="loader" key={""}></div>}
                <div className="card">
                    {filteredData.length === 0 ? 
                    (<div className="no-products-message">
                        <h2>No Products Found</h2>
                        <p>Try adjusting your filters or search keyword.</p>
                    </div>)
                : (
                    filteredData.map(
                    ({
                    id,
                    title,
                    image,
                    price,
                    starRating,
                    company,
                    inStock,
                    deliverable,
                    }) => (

                    <div className="card-container product-card">
                        <div key={id} className="product-image">
                            <img src={image} alt={title} />
                        </div>
                        <div>
                            <h2 className="product-title"> {title} </h2>
                            <h4 className="brand">Brand :{company}</h4>

                        </div>
                        <div className="card-details">
                            <p className="current-price"> ₹ {price}</p>
                            <p className="rating  fa fa-star " style={{color:'yellow'}}>
                                <span class="rating-count"> {starRating}</span>
                            </p>
                            <p className="in-stock-label">{inStock ? 'In Stock' : 'Out of Stock'}</p>
                            <p className="delivery-info">{deliverable ? 'Deliverable' : 'Not Deliverable'}</p>

                        </div>
           <div>
                <button className="button-56"onClick={() =>{
                       dispatch({
                        type: "ADD_TO_CART",
                        payload: { price, id, title, image },
                      });
                      showAlert("Added to Cart!", "success");
                }}> ADD TO CART</button>

             <button
                  className="button-32 wish"
                  onClick={() => {
                      AddToWish({
                      type: "ADD_TO_WISHLIST",
                      payload: { id },
                          })
                      showAlert("Added to Wishlist!", "success");
                         }}
                         >
                     <i className="fa fa-heart" aria-hidden="true"></i>
                      </button>
                </div>
                        <div className="info-btn"><Link to={`/product/${id}`}><img src={info} alt="" /></Link></div>
                    </div>
                    
                    )
                    ))  
                }

                </div>
                {alert && (
                     <Alert
                       message={alert.message}
                       type={alert.type}
                       onClose={() => setAlert(null)}
                      />
                     )}
            </div>
        </div>
    </>
    )
    }


    export default Products;