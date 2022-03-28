import {useState, useEffect} from 'react'
import Products from '../components/Products/Products';

const Department = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  let componentMounted = true;

  useEffect(() => {

    const data = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products`
      );

      if(componentMounted) {
        setProducts(await response.clone().json());
        setFilter(await response.json());
      }

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        componentMounted = false;
      }
    };
    data();

    console.log(filter)
    console.log(products)

  }, []);

  return(
    <div className="department">
      <Products products={filter}/>
    </div>
  )
}

export default Department;