import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/Cart-context";
import Alert from './../components/Alert';
import { useAlert } from "../Context/Alert-context";

const ProductDetail = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState("");
  const {state,dispatch} = useCart();
  const {showAlert,alert, hideAlert} = useAlert();
  

  useEffect(() => {
    axios.get("/api/products")
      .then((res) => {
        const productList = res.data.products;

        const product = productList.find(
          (item) => String(item.id) === String(productId)
        );

        if (!product) {
          setError("No product found in API response.");
        } else {
          setProductDetails(product);
        }
      })
      .catch((err) => {
        console.error("API error:", err);
        setError("Failed to load product. Please try again later.");
      });
  }, [productId]);

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  if (!productDetails) {
    return <h2 style={{ color: "white" }}>Loading...</h2>;
  }

  const { title, image, description, price, company,id } = productDetails;



  return (
    <div className="product-details-container">
      {/* <h1>Product Details</h1> */}
      <div className="product-details-content">
        <img src={image} alt={title} />
        <div className="product-details-text">
          <h2>{title}</h2>
          <h3>Price: ₹{price}</h3>
          <h3 style={{ color: "darkgreen" }}>Brand : {company}</h3>
          <h4>Description : {description}</h4>
          <button className="button-56" onClick={()=> {
            dispatch({type:"ADD_TO_CART", payload:{price,id,name,image}});
            showAlert("Added to Cart!", "success");
          }}>ADD TO CART</button>
        </div>
            {alert && (
                     <Alert
                       message={alert.message}
                       type={alert.type}
                       onClose={hideAlert}
                      />
                     )}
      </div>
    </div>
  );
};

export default ProductDetail;
