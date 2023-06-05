import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import Products from '../../Products/Product'
import Feature from '../../components/FeatureCard/Feature'
import State from '../../components/StateCard/State'
import Foot from '../../components/Footer/Foot'
import Spinner from '../../Spinner/Spinner'
import Category from '../../components/Category/Category'
const Home = () => {
  const [products,setProduct]=useState([]);

  useEffect(()=>{
    const fetchProduct=async()=>{
      const response=await fetch('https://fakestoreapi.com/products?limit=20')
      const data=await response.json();
      console.log(data);
      setProduct(data);
    }
    fetchProduct()

  },[]);
  return (
    <div>
        <Hero/>
        <Category/>
        <h2 className='text-center  text-4xl font-bold'>Products</h2>
        {
          products.length>0  ? 
          <Products products={products}/>:
          <div ><Spinner/></div>
        }
        <Feature/>
        <State/>
        

    </div>
  )
}

export default Home