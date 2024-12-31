import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { categoryId } = useParams(); // This will now represent the category name (e.g., "mobile")
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Fetch products based on category name
    axios
      .get(`/api/products?category=${categoryId}`) // categoryId is now the category name
      .then((res) => {
        setProducts(res.data.products || []); // Safely handle response
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Products in {categoryId}</h2> {/* Display the category name */}
      {products.length > 0 ? (
        products.map(({ _id, name, price, image }) => (
          <div key={_id} className="product-card">
            <img src={image} alt={name} width="100%" height="auto" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
          </div>
        ))
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
