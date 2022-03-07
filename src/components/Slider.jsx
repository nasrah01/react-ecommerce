import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './slider.css'
import {sliderData} from '../data/slider'

export default function Sliderapi() {

  return (
    <div className="slider__container">
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={4000}>
          {
            sliderData.map((item) => {
              return (
                <div className="images" key={item.id}>
                  <img src={item.image} alt={item.alt} />
                </div>
              );
            })
          }
      </Carousel>
    </div>
  );

}
