import {useState, useEffect} from 'react'
import Products from '../components/Products/Products';

export default function Clothes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=20");

      const data = await response.json();
      setProducts(data);
    };
    data();
  }, []);

  console.log(products)

  return(
    <div className="department">
      <Products products={products}/>
    </div>
  )
}