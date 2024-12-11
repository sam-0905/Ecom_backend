import {useState,useEffect, use } from "react";
import homePage from "../assets/ProductImg/homePage.png"
import axios from "axios";
import { useNavigate } from "react-router";

const Home = () => {
    const [category,setCategory] = useState([])   
    const navigate = useNavigate()

    useEffect(() => {
            axios.get("/api/categories")
            .then((res) => {
            setCategory(res.data.categories)
            console.log(res.data.categories)
            })
            .catch((err) =>{
             console.log(err)
            })
    },[])    

    const handleCategoryClick = (categoryId) => {
        // Navigate to ProductsPage and pass categoryId as state
        navigate("/products", { state: { categoryId } });
      };


    return (
    <>
     <div style={{backgroundImage:`url(${homePage})`,  
            backgroundPosition: 'center',
            backgroundSize: 'cover',    
            backgroundRepeat: 'no-repeat',
            height:"70vh",
            width:"auto",
            marginTop:"0",
            marginBottom:"0"
            }}>
            <div className='home'>
            <h1>Home</h1>
            <button>Shop</button>
            </div>
        </div>
        <div>
            {category && category.map(({categoryName,_id,image}) => (
               <div className="home-category">
               <li key={_id} className="home-cateList" onClick={() =>handleCategoryClick(_id)}>
                <img className="home-cateImg" src={image} width="100%" height="auto" alt={categoryName}/> 
                <h1>{categoryName}</h1>
                </li>
               </div>
            ))}
            
        </div>
    </>
)
}
export default Home;