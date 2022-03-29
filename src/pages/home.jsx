import React from 'react';
import Slider from '../components/Home/Slider';

export const Home = ({products}) => {

  const topProducts = products.slice(0, 8);

  return (
    <div>
      <Slider />
      <div className="top__picks">
        <h2>Top Picks from us</h2>
        <div className="homepage__mosaic">
          <div className="mosaic">
            {topProducts.map((product) => (
              <div className="mosaic__img" key={product.id}>
                <img src={product.image} alt={products.catagory} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home