import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Category.css" 
import { useCart } from "../Context/Cart-context";
import { useWish } from "../Context/Wish-context";
import info from "../assets/Icon/Info.png"
import { useAlert } from "../Context/Alert-context";
import Alert from "../components/Alert";

const CategoryPage = () => {
  const { categoryId } = useParams(); // Extract category name from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {state,dispatch} = useCart();
  const { wishState, wishDispatch } = useWish();
  const {showAlert , alert, hideAlert} = useAlert();


  useEffect(() => {
    setLoading(true);
    setError(null);
    
    axios
      .get("/api/products?category=${categoryId}") // Fetch all products
      .then((res) => {
        const allProducts = res.data.products || []; // Ensure data exists

        // **Filter products manually based on selected category**
        const filteredProducts = allProducts.filter(
          (product) => product.category.toLowerCase() === categoryId.toLowerCase()
        );

        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <p className="loader"></p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <div>
      <h2 className="category-head">Products in {categoryId}</h2> {/* Show selected category */}
      {products.length > 0 ? (
        <div className="category">
          {products.map(({ id, price, image ,company,title}) => (
            <div key={id} className="category-card">
              <img src={image} alt={name} width="100%" height="auto" className="category-image" />
              <h2 className="category-title">{title}</h2>
              <p className="category-price">Price: $ {price}</p>
              <h3 className="brand">Brand :{company}</h3>
              <div>
              <button type="button" className="button-56" onClick={()=> {
                dispatch({type:"ADD_TO_CART", payload:{price,id,title,image}})
                showAlert("Added to Cart!", "success");
              }}>ADD TO CART</button>

                    <button className="button-32 wish-btn" onClick={()=> {
                      wishDispatch({type:"ADD_TO_WISHLIST", payload:{price,id,title,image}})
                      showAlert("Added to Wishlist!", "success");
                    }}> <i class="fa fa-heart" aria-hidden="true"></i>
                    </button>
                <div className="info-btn"><Link to={`/product/${id}`}><img src={info} alt="" /></Link></div>
                    
                    </div>
                    
            </div>
        ))}
           {alert && (
                     <Alert
                       message={alert.message}
                       type={alert.type}
                       onClose={hideAlert}
                      />
                     )}
        </div>
      ) : (
        <p className="empty">No products found for this category.</p>
      )}
          <Link to="/" className="button-74">Back To Home</Link>
    </div>
    </>
  );
};

export default CategoryPage;
