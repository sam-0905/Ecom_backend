import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homePage from "../assets/ProductImg/homePage.png";
import axios from "axios";

const Home = () => {
  const [category, setCategory] = useState([]);

  // Fetch categories
  useEffect(() => {
    axios
      .get("/api/categories")
      .then((res) => {
        setCategory(res.data.categories);
        console.log(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* Background Section */}
      <div
        style={{
          backgroundImage: `url(${homePage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "70vh",
          width: "auto",
          marginTop: "0",
          marginBottom: "0",
        }}
      >
        <div className="home">
          <h1>Home</h1>
          <Link to="/body"><button>Shop</button></Link>
        </div>
      </div>

      {/* Categories Section */}
      <div>
        {category.map(({ categoryName, _id, image }) => (
          <div key={_id} className="home-category">
            <li className="home-cateList">
              {/* Link to the category page using categoryName */}
              <Link to={`/category/${categoryName}`}>
                <img
                  className="home-cateImg"
                  src={image}
                  width="100%"
                  height="auto"
                  alt={categoryName}
                />
                <h1>{categoryName}</h1>
              </Link>
            </li>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
