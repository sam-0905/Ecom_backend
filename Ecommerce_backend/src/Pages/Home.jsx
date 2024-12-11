import {useState,useEffect } from "react";
import homePage from "../assets/ProductImg/homePage.png"
import axios from "axios";

const Home = () => {
    const [category,setCategory] = useState([]) 

    useEffect(() => {
        axios.get("/api/categories")
        .then((res) => {
        setCategory(res.data.categories)
        console.log(res.data.categories)
        })
    })

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
                 <li key={_id} className="home-cateList">
                 <img className="home-cateImg" src={image} width="100%" height="auto" alt={categoryName}  c/> 
                <h1>{categoryName}</h1>
                </li>
               </div>
            ))}
            
        </div>
    </>
)
}
export default Home;