import { useState, useEffect } from "react";
import './homePicks.css';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const TopPicks = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=8");

      const data = await response.json();
      setProducts(data);
    };
    TopPicks();
  }, []);

  console.log(products[0]);

  return (
    <div>
      <h2>Top Picks</h2>
      <div className="homepage__mosaic">
        <div className="mosaic__left">
          <img src={products[0].image} alt={products[0].catagory} />
        </div>
        <div className="mosaic__right">
          <div>
            <img src={products[1].image} alt={products[1].catagory} />
            <img src={products[2].image} alt={products[2].catagory} />
            <img src={products[3].image} alt={products[3].catagory} />
          </div>
          <div>
            <img src={products[4].image} alt={products[4].catagory} />
            <img src={products[5].image} alt={products[5].catagory} />
            <img src={products[6].image} alt={products[6].catagory} />
            <img src={products[7].image} alt={products[7].catagory} />
          </div>
        </div>
      </div>
    </div>
  );
}
