import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Pages/Home.css"

import axios from "axios";

const Home = () => {
  const [category, setCategory] = useState([]);
const images = [
  new URL("../assets/carouselImg/homePage.png",import.meta.url).href,
  new URL("../assets/carouselImg/homePage2.png", import.meta.url).href,
  new URL("../assets/carouselImg/homePage3.png", import.meta.url).href,
  new URL("../assets/carouselImg/homePage4.png", import.meta.url).href
];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 ) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

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
        className="Carousel"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "70vh",
          width: "auto",
          marginTop: "0",
          marginBottom: "0",
        }}
      >
          <button className="carousel-btn prev" onClick={goToPrev}>◀</button>
          <button className="carousel-btn next" onClick={goToNext}>▶</button>

          <div className="carousel-dots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>

        <div className="home">
          {/* <h1>Home</h1> */}
          <Link to="/products"><button className="button-9 home-btn">Shop</button></Link>
        </div>
      </div>

      {/* Categories Section */}
      <div>
      <div  className="home-category">
        {category.map(({ categoryName,image,id }) => (
        <div className="homeCategory-card" key={id}>
            <li className="home-cateList">
              {/* Link to the category page using categoryName */}
              <Link to={`/category/${categoryName}`}>
                <img
                  src={image}
                  width="100%"
                  height="auto"
                  alt={categoryName}
                />
                <h1 className="home-categoryName">{categoryName}</h1>
              </Link>
            </li>
            </div>
        ))}
        </div>

      </div>
    </>
  );
};

export default Home;
