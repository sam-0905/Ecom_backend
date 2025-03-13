import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Category.css" 

const CategoryPage = () => {
  const { categoryId } = useParams(); // Extract category name from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Products in {categoryId}</h2> {/* Show selected category */}
      {products.length > 0 ? (
        products.map(({ _id, name, price, image ,company,title}) => (
          <div className="category">
            <div key={_id} className="category-card">
            <img src={image} alt={name} width="100%" height="auto" />
            <h2>{title}</h2>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <h2>{company}</h2>
            </div>
          </div>
        ))
      ) : (
        <p>No products found for this category.</p>
      )}
          <Link to="/">BacK To Home</Link>
    </div>
  );
};

export default CategoryPage;
