import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './slider.css'
import ImageOne from '../assets/sale.jpeg';
import ImageTwo from "../assets/new.jpeg";
import ImageThree from "../assets/refresh.jpeg";
import ImageFour from "../assets/flowers.jpeg";

export default function Sliderapi() {

  return (
    <div className='slider__container'>
      <Carousel autoPlay infiniteLoop showStatus={false}>
        <div>
          <img src={ImageOne} alt="sale" />
        </div>
        <div>
          <img src={ImageTwo} alt="new in womens" />
        </div>
        <div>
          <img src={ImageThree} alt="womens fashion" />
        </div>
        <div>
          <img src={ImageFour} alt="mothers day" />
        </div>
      </Carousel>
    </div>
  );

}
