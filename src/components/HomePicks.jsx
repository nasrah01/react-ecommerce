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
        <div className="mosaic__right">
          {products.map((product) => (
            <img src={product.image} alt={products.catagory} />
          ))}
        </div>
      </div>
    </div>
  );
}
