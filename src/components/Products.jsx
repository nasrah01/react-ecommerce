import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const TopPicks = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=35");

      const data = await response.json();
      setProducts(data);
    };
    TopPicks();
  }, []);

  console.log(products);

  return (
    <div>
      <h2>Top Picks for Lingerie</h2>
      <div>
        {products.map((item) => {
          return (
            <img src={item.image} alt="product" width={200} height={200} />
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
