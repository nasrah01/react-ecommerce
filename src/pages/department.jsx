import {useState, useEffect} from 'react'
import Products from '../components/Products/Products';

const Department = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const data = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products`
      );

        setProducts(await response.json());
    
    };
    data();

  }, [products]);

  return(
    <div className="department">
      <Products products={products}/>
    </div>
  )
}

export default Department;