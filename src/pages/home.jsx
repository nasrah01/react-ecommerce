import Slider from '../components/Home/Slider';
import { useDispatch } from "react-redux";
import { selectedItem } from "../redux/reducers/items";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios'

const Home = () => {

  const dispatch = useDispatch();
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProducts(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData()
  }, [])

  const featureProducts = products.slice(12, 14);

  return (
    <div>
      <Slider />
      <div className="top__picks">
        <div className="top__picks--header">
          <h2>Top Picks from us</h2>
          <p>
            Use #S&K or tag us in your clothing or home snaps for your chance to
            be featured and win a £100 S&K voucher. T&Cs apply.
          </p>
          <div className="gallery__btn">
            <button className="btn btn-1">Upload your photo</button>
            <button className="btn btn-2">View our Gallery</button>
          </div>
        </div>
        <div className="homepage__mosaic">
          <div className="mosaic">
            {featureProducts.map((product) => (
              <div
                className="mosaic__container"
                key={product.id}
                onClick={() => dispatch(selectedItem(product))}
              >
                <Link
                  to="/item"
                  style={{ textDecoration: "none" }}
                  key={product.id}
                >
                  <div className="mosaic__card">
                    <img src={product.image} alt={products.catagory} />
                    <p>{product.title}</p>
                  </div>
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