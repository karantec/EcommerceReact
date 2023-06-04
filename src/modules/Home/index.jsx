import React from 'react'
import Hero from '../../components/Hero/Hero'
import Products from '../../Products'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import State from '../../components/StateCard/State'
import Foot from '../../components/Footer/Foot'
const index = () => {
  return (
    <div>
        <Hero/>
        <h2 className='text-center  text-4xl font-bold'>Products</h2>
        <Products/>
        <FeatureCard/>
        <State/>
        <Foot/>

    </div>
  )
}

export default index