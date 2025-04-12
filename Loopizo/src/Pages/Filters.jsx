// Filters.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Filters({onFilter}) {

    const[sort,setSort] = useState("");
    const[inStockOnly , setInStockOnly] = useState(false);
    const[deliverable,setDeliverable] = useState(false);
    const[minRating , setMinRating] = useState(0)
    const[products,setProducts] = useState([])

    useEffect(() =>{
        axios.get('/api/products')
        .then((res) =>{
            setProducts(res.data.products)
            console.log(res.data.products)
        })
    },[])     

    useEffect(() => {
      
      const filtered =  products
            .filter(product =>(inStockOnly ? product.inStock:true))
            .filter(product => deliverable ? product.deliverable: true)
            .filter(product => product.starRating >= minRating)
            .sort((a,b) => {
              if(sort === "lowToHigh") return a.price - b.price;
              if(sort === "highToLow") return b.price - a.price;
              return 0;
            });
            onFilter(filtered)
    },[products, sort, inStockOnly, deliverable, minRating]);

 
  return (
    <>
    <div style={{ width: '250px', padding: '1rem', borderRight: '1px solid #ddd' }}>
    <h1>Filters</h1>
      <h3>Sort By</h3>

      <label>
        <input
          type="radio"
          name="sort"
          checked={sort === "lowToHigh"}
          onChange={() => setSort("lowToHigh")}
        />
        Price: Low to High
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="sort"
          checked={sort === "highToLow"}
          onChange={() => setSort("highToLow")}
        />
        Price: High to Low
      </label>

      <h3 style={{ marginTop: '1rem' }}>Filters</h3>

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={() => setInStockOnly(!inStockOnly)}
        />
        In Stock Only
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={deliverable}
          onChange={() => setDeliverable(!deliverable)}
        />
        Deliverable Only
      </label>

      <h3 style={{ marginTop: '1rem' }}>Rating</h3>
      {[4, 3, 2, 1].map((star) => (
        <label key={star} style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="radio"
            name="rating"
            checked={minRating === star}
            onChange={() => setMinRating(star)}
          />
          {star}★ & above
        </label>
        
        
      ))}

        <button
        style={{
          marginTop: "1rem",
          padding: "6px 12px",
          backgroundColor: "#eee",
          border: "1px solid #ccc",
          cursor: "pointer"
        }}
        onClick={() => {
          setSort("");
          setInStockOnly(false);
          setDeliverable(false);
          setMinRating(0);
        }}
      >
        Clear All Filters
      </button>
      
    </div>
    
    </>
  );
}

export default Filters;
