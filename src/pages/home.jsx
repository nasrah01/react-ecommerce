import Slider from '../components/Home/Slider';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, selectedItem } from "../redux/reducers/items";
import { Link } from 'react-router-dom';

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items).slice(0, 8);

    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);

    console.log(products);

  return (
    <div>
      <Slider />
{      <div className="top__picks">
        <h2>Top Picks from us</h2>
        <div className="homepage__mosaic">
          <div className="mosaic">
            {products.map((product) => (
              <div className="mosaic__img" key={product.id} onClick={() => dispatch(selectedItem(product))}>
                <Link to="/item" style={{ textDecoration: "none" }} key={product.id}>
                <img src={product.image} alt={products.catagory} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div> }
    </div>
  );
}

export default Home