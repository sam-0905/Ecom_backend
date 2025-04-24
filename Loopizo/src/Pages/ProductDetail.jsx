import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`/api/products/${productId}`)
            .then((res) => {
                console.log("API response:", res.data);

                const product = res.data.product;

                if (!product || String(product.id) !== String(productId)) {
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

    const { title, image, description, price } = productDetails;

    return (
        <>
            <h1 style={{ color: "white" }}>Product Details</h1>
            <div>
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <h3>Price: ₹{price}</h3>
                <h4>{description}</h4>
            </div>
        </>
    );
};

export default ProductDetail;
