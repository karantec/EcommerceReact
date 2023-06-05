import React,{useEffect,useState} from 'react';
import Products from '../../../Products/Product';
import Category from '../../../components/Category/Category';

const Item = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchCategory=async()=>{
          const response=await fetch(`https://fakestoreapi.com/products`)
          const data=await response.json();
          console.log(data);
        setProducts(data);
        }
        fetchCategory();
    
      },[]);
    
  return (
    <div>  
       <Category/>
       {
        products.length>0 
        ? <Products products={products}/>
       :
       <div>Loading ....</div>
       }
    </div>
  )
}

export default Item