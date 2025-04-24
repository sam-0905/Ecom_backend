import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("/api/products")
          .then((res) => {
            const productList = res.data.products;
      
            function getProductDetails(productList, productId) {
              return productList.find((item) => String(item.id) === String(productId));
            }
      
            const product = getProductDetails(productList, productId);
      
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

    const { title, image, description, price,company } = productDetails;

    return (
        <>
  <div className="product-details-container">
                    <h1>Product Details</h1>
        <div className="product-details-content">
             <img src={productDetails.image} alt={productDetails.title} />
            <div className="product-details-text">
                <h2>{productDetails.title}</h2> 
                <h3 style={{color:"darkred"}}>Brand : {productDetails.company}</h3>
                <h3>Price: ₹{productDetails.price}</h3>
             <h4>Description : {productDetails.description}</h4>
          </div>
      </div>
</div>


        </>
    );
};

export default ProductDetail;
