import Slider from '../components/Home/Slider';
import { useEffect, useState } from "react";
import { client } from '../client'

const Home = () => {

    const [ products, setMosaicProducts ] = useState([])

    useEffect(() => {
      client
        .fetch(
          `*[_type == "mosaic"]{
            product,
            image{
              asset->{
                _id,
                url
              }
            }
        }`
        )
        .then((data) => {
          setMosaicProducts(data)
        })
        .catch((error) => console.log(error.message));
    }, [])

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
            {products?.map((product, index) => (
              <div
                className="mosaic__container"
                key={index}
              >
                  <div className="mosaic__card">
                    <img src={product.image.asset.url} alt={product.product} />
                    <p>{product.product}</p>
                  </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home