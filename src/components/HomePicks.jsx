import { useState, useEffect } from "react";

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
          <img src={products[1].image} alt={products[1].catagory} />
          <img src={products[2].image} alt={products[2].catagory} />
          <img src={products[3].image} alt={products[3].catagory} />
        </div>
      </div>
    </div>
  );
}
