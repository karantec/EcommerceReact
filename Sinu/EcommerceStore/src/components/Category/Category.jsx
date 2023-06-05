import React,{useEffect,useState} from 'react'
import Feature from '../FeatureCard/Feature'

// import {useState} from 'react'

const Category = () => {
    
    const [categories,setCategory]=useState([]);
    useEffect(()=>{
        const fetchCategory=async()=>{
          const response=await fetch(`https://fakestoreapi.com/products/categories`)
          const data=await response.json();
          console.log(data);
        setCategory(data);
        }
        fetchCategory();
    
      },[]);
      if(categories.length===0) return <div>Loading....</div>
  return (
    <div>  
        <Feature  cards={categories}/>
    
        </div>
  )
}

export default Category