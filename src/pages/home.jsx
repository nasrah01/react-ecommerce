import React from 'react';
import Slider from '../components/Slider';
import HomePicks from "../components/HomePicks";
import Product from '../components/Products/Product';

export const Home = () => {

  return (
    <div>
      <Slider />
      <HomePicks />
      <Product />
    </div>
  )
}

export default Home