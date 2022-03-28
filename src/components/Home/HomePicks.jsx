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

  console.log(products)
  return (
    <div className="top__picks">
      <h2>Top Picks from us</h2>
      <div className="homepage__mosaic">
        <div className="mosaic">
          {products.map((product) => (
            <div className="mosaic__img" key={product.id}>
              <img src={product.image} alt={products.catagory} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
