import Slider from '../components/Home/Slider';
import { useSelector, useDispatch } from "react-redux";
import { selectedItem } from "../redux/reducers/items";
import { Link } from 'react-router-dom';

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items).slice(12, 19);

  return (
    <div>
      <Slider />
        <div className="top__picks">
          <div className='top__picks--header'>
            <h2>Top Picks from us</h2>
            <p>
              Use #S&K or tag us in your clothing or home snaps for your
              chance to be featured and win a £100 S&K voucher. T&Cs apply.
            </p>
            <div>
              <button className='btn-1'>Upload your photo</button>
              <button className='btn-2'>View Gallery</button>
            </div>
          </div>
          <div className="homepage__mosaic">
            <div className="mosaic">
              {products.map((product) => (
                <div
                  className="mosaic__img"
                  key={product.id}
                  onClick={() => dispatch(selectedItem(product))}
                >
                  <Link
                    to="/item"
                    style={{ textDecoration: "none" }}
                    key={product.id}
                  >
                    <img src={product.image} alt={products.catagory} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home