import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category name from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error

  // Fetch products based on categoryName from the backend
  useEffect(() => {
    // Set loading to true while fetching data
    setLoading(true);
    setError(null);

    axios
      .get(`/api/products`) // Fetch products by categoryName
      .then((res) => {
        setProducts(res.data.products); // Store fetched products in state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error("Error fetching filtered products:", err);
        setError("Could not fetch products. Please try again later.");
        setLoading(false); // Set loading to false even in case of error
      });
  }, [categoryName]); // Run effect when categoryName changes

  // Conditional rendering based on the loading and error states
  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Products in {categoryName}</h2>
      {products.length > 0 ? (
        products.map(({ _id, name, price, image }) => (
          <div key={_id} className="product-card">
            <img src={image} alt={name} width="100%" height="auto" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
          </div>
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
