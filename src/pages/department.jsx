import {useState, useEffect} from 'react'
import Products from '../components/Products/Products';
import { useLocation } from 'react-router-dom';

const Department = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  let componentMounted = true;

  const location = useLocation();
  const { page } = location.state;

  useEffect(() => {

    const data = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products`
      );

      if(componentMounted) {
        setProducts(await response.clone().json());
        setFilter(await response.json());

        console.log(filter);

      }

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        componentMounted = false;
      }
    };
    data();

  }, []);

  return(
    <div className="department">
      <Products products={filter}/>
    </div>
  )
}

export default Department;